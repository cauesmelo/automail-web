import React, { useCallback, useEffect, useState } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
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
      content: 'Teste',
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

  const edit = () => {
    console.log('xD');
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
          <h3>{followUp ? followUp?.title : 'Padrão'}</h3>
          {followUp?.title === 'Padrão' ? '' : <span>editar nome</span>}
          <span>enviar teste</span>
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
                      <Button className="editButton">
                        <FaEdit />
                        Editar
                      </Button>
                      {followUp.emailModel.length !== 1 && (
                        <Button
                          className="deleteButton"
                          onClick={() => handleDeleteEmailModel(emailModel.id)}
                        >
                          <FaTrash />
                          Excluir
                        </Button>
                      )}
                    </BumpContentItemTitle>
                    <BumpContentItemSubTitle>
                      <p>
                        <FaSignOutAlt />
                        Se você não receber uma resposta, este será enviado
                        {/* eslint-disable-next-line */}
                        <b>{' ' + emailModel.daysAfter} dias </b>
                        {/* eslint-disable-next-line */}
                        depois de enviado o <b> email original</b>.
                      </p>
                    </BumpContentItemSubTitle>
                    <BumpContentItemContent>
                      <span>Para: Destinatário</span>
                      <span>De: Você</span>
                      <p>{emailModel.content}</p>
                      <div className="Balls">
                        <FaCircle />
                        <FaCircle />
                        <FaCircle />
                      </div>
                      <span className="spanBalls">
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
