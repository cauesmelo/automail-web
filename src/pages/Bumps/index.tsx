import React, { useCallback, useEffect, useState } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  FaSignOutAlt,
  FaEnvelope,
  FaCircle,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  TitleContainer,
  Content,
  BumpMenu,
  BumpHeader,
  BumpContent,
  BumpContentHeader,
  BumpContentItem,
  BumpContentItemCard,
  BumpContentItemTitle,
  BumpContentItemSubTitle,
  BumpContentItemContent,
} from './styles';

import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';

interface EmailModelData {
  id: string;
  order: number;
  content: string;
  daysAfter: number;
}

interface FollowUpSequenceData {
  title: string;
  id: string;
  emailModel: EmailModelData[];
}

const Bumps: React.FC = () => {
  const { user, clearCache } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const [followUpList, setFollowUpList] = useState<FollowUpSequenceData[]>();
  const [followUp, setFollowUp] = useState<FollowUpSequenceData>();
  const [editFollowUp, setEditFollowUp] = useState<boolean>(false);
  const [followUpTitle, setFollowUpTitle] = useState<string>('');
  const [editEmailModel, setEditEmailModel] = useState<string>('');
  const [daysAfter, setDaysAfter] = useState<number>(0);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  const orderEmailModel = useCallback(
    (followUpListToOrder: FollowUpSequenceData) => {
      const followUpCopy = followUpListToOrder;
      let counter = 1;
      followUpCopy?.emailModel.sort((a, b) => a.daysAfter - b.daysAfter);
      followUpCopy?.emailModel.map(emailModel => {
        emailModel.order = counter;
        counter += 1;
      });
      return followUpCopy;
    },
    [],
  );

  useEffect(() => {
    let ignore = false;
    const getData = async () => {
      try {
        const responseFollowUpList = await api.get(`/followup/`, {
          params: {
            userId: user.id,
          },
        });
        // Hack to prevent memory leak
        if (!ignore) setFollowUpList(responseFollowUpList.data);

        const responseFollowUp = await api.get(`/followup/default/${user.id}`);

        if (!followUp) setFollowUp(orderEmailModel(responseFollowUp.data));
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Não foi possível carregar as configurações.',
          description:
            'Ocorreu um erro ao carregar configurações. Tente novamente.',
        });
        clearCache();
        history.push('/');
      }
    };
    getData();
    return () => {
      ignore = true;
    };
  }, [user.id, addToast, clearCache, history, orderEmailModel, followUp]);

  const handleNewFollowUpSequence = useCallback(async () => {
    const newFollowUpSequence = await api.post('/followup/', {
      title: 'Sequência sem nome',
      userId: user.id,
    });
    const response = await api.get(`/followup/${newFollowUpSequence.data.id}`, {
      params: {
        userId: user.id,
      },
    });
    setFollowUp(orderEmailModel(response.data));
  }, [user.id, orderEmailModel]);

  // TODO Need refactor
  const handleAddEmailModel = async (
    followUpSequenceId: string | undefined,
  ) => {
    await api.post(`/emailmodel/`, {
      userId: user.id,
      followUpSequenceId,
      content: 'Olá, conseguiu verificar este e-mail?',
      daysAfter: 30,
    });
    const response = await api.get(`/followup/${followUp?.id}`, {
      params: {
        userId: user.id,
      },
    });
    setFollowUp(orderEmailModel(response.data));
  };

  const handleDeleteEmailModel = async (id: string) => {
    await api.delete(`/emailmodel/${id}`);

    const response = await api.get(`/followup/${followUp?.id}`, {
      params: {
        userId: user.id,
      },
    });

    setFollowUp(orderEmailModel(response.data));
  };

  const handleFollowUpChange = useCallback(
    async (e: React.ChangeEvent<HTMLSelectElement>) => {
      const followUpSequenceId = e.currentTarget.value;
      const response = await api.get(`/followup/${followUpSequenceId}`, {
        params: {
          userId: user.id,
        },
      });
      setFollowUp(orderEmailModel(response.data));
      setEditFollowUp(false);
    },
    [user.id, orderEmailModel],
  );

  const handleDeleteFollowUpSequence = async (id: string | undefined) => {
    await api.delete(`/followup/${id}`);

    const response = await api.get(`/followup/default/${user.id}`, {
      params: {
        userId: user.id,
      },
    });

    setFollowUp(orderEmailModel(response.data));
  };

  const handleEditFollowUp = () => {
    setEditFollowUp(prevState => !prevState);
  };

  const handleUpdateFollowUp = async (id: string | undefined) => {
    await api.put(`/followup/${id}`, {
      title: followUpTitle,
    });

    const response = await api.get(`/followup/${followUp?.id}`, {
      params: {
        userId: user.id,
      },
    });
    setFollowUp(orderEmailModel(response.data));

    if (followUp) {
      const newFollowUp = followUp;
      newFollowUp.title = followUpTitle;
      setFollowUp(newFollowUp);
    }

    handleEditFollowUp();
  };

  const handleEditEmailModel = (id: string) => {
    setEditEmailModel(id);
    const followUpSelected = followUp?.emailModel.find(item => item.id === id);

    if (followUpSelected) {
      setDaysAfter(followUpSelected?.daysAfter);
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(followUpSelected.content),
        ),
      );
    }
  };

  const handleUpdateEmailModel = async () => {
    const content = editorState.getCurrentContent().getPlainText('\u0001');
    await api.put(`/emailmodel/${editEmailModel}`, {
      content,
      daysAfter,
    });

    setEditEmailModel('');

    const response = await api.get(`/followup/${followUp?.id}`, {
      params: {
        userId: user.id,
      },
    });
    setFollowUp(orderEmailModel(response.data));
  };

  const handleDaysAfterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDaysAfter(Number(e.currentTarget.value));
  };

  return (
    <Container>
      <TitleContainer>
        <h1>Configurações de reenvio</h1>
        <p>
          Nós já configuramos sua conta com os reenvios padrões. Mas sinta-se a
          vontade para customizar as mensagens e quando elas serão enviadas.
          Aproveite e reenvie com responsabilidade.
        </p>
      </TitleContainer>
      <Content>
        <h2>Gerencie seus reenvios: </h2>
        <BumpMenu>
          <select value={followUp?.id} onChange={e => handleFollowUpChange(e)}>
            {followUpList?.map(followUpSequence => (
              <option key={followUpSequence.id} value={followUpSequence.id}>
                {followUpSequence.title}
              </option>
            ))}
          </select>
          <p className="tooltip">
            O que é uma sequência de reenvio?
            <BsFillQuestionCircleFill />
            <span className="tooltipText">
              Sequências de reenvios permitem você crias multiplas configurações
              de e-mail a ser enviados. Use isto para enviar diferentes tipos de
              email em diferentes situações.
            </span>
          </p>
          <Button onClick={handleNewFollowUpSequence}>
            + Nova sequência de reenvio
          </Button>
        </BumpMenu>
        <BumpHeader>
          {editFollowUp ? (
            <>
              <input
                type="text"
                defaultValue={followUp?.title}
                onChange={e => setFollowUpTitle(e.target.value)}
              />
              <Button
                className="editButton confirmButton"
                onClick={() => handleUpdateFollowUp(followUp?.id)}
              >
                Confirmar alteração
              </Button>
              <Button
                className="editButton cancelButton"
                onClick={handleEditFollowUp}
              >
                Cancelar
              </Button>
            </>
          ) : (
            <>
              <h3>{followUp ? followUp.title : 'Padrão'}</h3>
              {followUp?.title === 'Padrão' ? (
                ''
              ) : (
                <Button className="editButton" onClick={handleEditFollowUp}>
                  editar nome
                </Button>
              )}
              <Button className="editButton" onClick={handleEditFollowUp}>
                enviar teste
              </Button>
            </>
          )}

          <p>
            {/* TODO: CHANGE THIS WHEN SERVICE IS READY */}
            Para utilizar essa sequência de reenvio, coloque este endereço de
            e-mail como cópia oculta na mensagem que deseja manter contato:
            <b> recontato@automail.com</b>
          </p>
          {followUp?.title === 'Padrão' ? (
            ''
          ) : (
            <Button
              className="deleteButton"
              onClick={() => handleDeleteFollowUpSequence(followUp?.id)}
            >
              <FaTrash />
              Deletar sequência
            </Button>
          )}
        </BumpHeader>
        <BumpContent>
          <BumpContentHeader>
            <FaEnvelope />
            <h3>Email original</h3>
          </BumpContentHeader>
          <div>
            {followUp &&
              followUp.emailModel.map((emailModel, index) => (
                <BumpContentItem
                  key={emailModel.id}
                  isLast={index === followUp.emailModel.length - 1}
                >
                  <div className="dayBall">
                    <span className="dayLabel">DIA</span>
                    <span className="dayNumber">{emailModel.daysAfter}</span>
                  </div>
                  <BumpContentItemCard>
                    <BumpContentItemTitle>
                      <h3>
                        Reenvio
                        {` ${emailModel.order}`}
                      </h3>
                      {emailModel.id !== editEmailModel && (
                        <Button
                          onClick={() => handleEditEmailModel(emailModel.id)}
                          className="editButton"
                        >
                          <FaEdit />
                          Editar
                        </Button>
                      )}

                      {followUp.emailModel.length !== 1 &&
                        emailModel.id !== editEmailModel && (
                          <Button
                            className="deleteButton"
                            onClick={
                              () => handleDeleteEmailModel(emailModel.id)
                              // eslint-disable-next-line
                            }
                          >
                            <FaTrash />
                            Excluir
                          </Button>
                        )}
                    </BumpContentItemTitle>
                    <BumpContentItemSubTitle>
                      {/* eslint-disable */}
                      <p>
                        <FaSignOutAlt />
                        Se você não receber uma resposta, este será enviado
                        <b>
                          {emailModel.id === editEmailModel ? (
                            <select
                              value={daysAfter}
                              onChange={(e) =>
                                handleDaysAfterChange(e)}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="5">5</option>
                              <option value="8">8</option>
                              <option value="10">10</option>
                              <option value="12">12</option>
                              <option value="15">15</option>
                              <option value="20">20</option>
                              <option value="25">25</option>
                              <option value="30">30</option>
                              <option value="35">35</option>
                              <option value="40">40</option>
                              <option value="45">45</option>
                              <option value="50">50</option>
                              <option value="60">60</option>
                              <option value="70">70</option>
                              <option value="80">80</option>
                              <option value="90">90</option>
                            </select>
                          ) : (
                            ` ${emailModel.daysAfter} `
                          )}
                          dias </b> depois de enviado o <b> email original</b>.
                      </p>
                    </BumpContentItemSubTitle>
                    <BumpContentItemContent>
                      {/* eslint-enable */}
                      <span className="smallText">Para: Destinatário</span>
                      <span className="smallText">De: Você</span>
                      {emailModel.id === editEmailModel ? (
                        <>
                          <div className="editorContainer">
                            <Editor
                              editorState={editorState}
                              onEditorStateChange={setEditorState}
                              toolbarClassName="toolbarClassName"
                              wrapperClassName="wrapperClassName"
                              editorClassName="editorClassName"
                            />
                          </div>
                          <div className="buttonsContainer">
                            <Button onClick={handleUpdateEmailModel}>
                              Salvar
                            </Button>
                            <Button className="cancelButton">Cancelar</Button>
                          </div>
                        </>
                      ) : (
                        <p>{emailModel.content}</p>
                      )}
                      <div className="Balls">
                        <FaCircle />
                        <FaCircle />
                        <FaCircle />
                      </div>
                      <span className="smallText spanBalls">
                        <p>Seu e-mail original estará aqui.</p>
                      </span>
                    </BumpContentItemContent>
                  </BumpContentItemCard>
                </BumpContentItem>
              ))}
          </div>
          <Button
            className="buttonAdd"
            onClick={() => handleAddEmailModel(followUp?.id)}
          >
            + Adicionar outro reenvio
          </Button>
        </BumpContent>
      </Content>
    </Container>
  );
};

export default Bumps;
