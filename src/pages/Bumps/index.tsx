import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import {
  FaSignOutAlt,
  FaEnvelope,
  FaCircle,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';
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

const Bumps: React.FC = () => {
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
          <select>
            <option value="0">Padrão</option>
            <option value="1">Personalizado 1</option>
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
          <Button>+ Nova sequência de reenvio</Button>
        </BumpMenu>
        <BumpHeader>
          <h3>Padrão</h3>
          <span>enviar teste</span>
          <p>
            Para utilizar essa sequência de reenvio, coloque este endereço de
            e-mail como cópia oculta na mensagem que deseja manter contato:
            <b> recontato@automail.com</b>
          </p>
        </BumpHeader>
        <BumpContent>
          <BumpContentHeader>
            <FaEnvelope />
            <h3>Email original</h3>
          </BumpContentHeader>
          <BumpContentItem>
            <div className="dayBall">
              <span className="dayLabel">DIA</span>
              <span className="dayNumber">3</span>
            </div>
            <BumpContentItemCard>
              <BumpContentItemTitle>
                <h3>Reenvio 1</h3>
                <Button className="editButton">
                  <FaEdit />
                  Editar
                </Button>
                <Button className="deleteButton">
                  <FaTrash />
                  Excluir
                </Button>
              </BumpContentItemTitle>
              <BumpContentItemSubTitle>
                <p>
                  <FaSignOutAlt />
                  Se você não receber uma resposta, este será enviado
                  <b> 3 dias </b>
                  {/* eslint-disable-next-line */}
                  depois de enviado o <b> email original</b>.
                </p>
              </BumpContentItemSubTitle>
              <BumpContentItemContent>
                <span>Para: Destinatário</span>
                <span>De: Você</span>
                <p>
                  Olá, queria verificar se conseguiu receber o e-mail abaixo.
                  <br />
                  <br />
                  Obrigado!
                </p>
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
          <BumpContentItem isLast>
            <div className="dayBall">
              <span className="dayLabel">DIA</span>
              <span className="dayNumber">3</span>
            </div>
            <BumpContentItemCard>
              <BumpContentItemTitle>
                <h3>Reenvio 2</h3>
                <Button className="editButton">
                  <FaEdit />
                  Editar
                </Button>
                <Button className="deleteButton">
                  <FaTrash />
                  Excluir
                </Button>
              </BumpContentItemTitle>
              <BumpContentItemSubTitle>
                <p>
                  <FaSignOutAlt />
                  Se você não receber uma resposta, este será enviado
                  <b> 3 dias </b>
                  {/* eslint-disable-next-line */}
                  depois de enviado o <b> email original</b>.
                </p>
              </BumpContentItemSubTitle>
              <BumpContentItemContent>
                <span>Para: Destinatário</span>
                <span>De: Você</span>
                <p>
                  Olá, queria verificar se conseguiu receber o e-mail abaixo.
                  <br />
                  <br />
                  Obrigado!
                </p>
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
          <Button className="buttonAdd">+ Adicionar outro reenvio</Button>
        </BumpContent>
      </Content>
    </Container>
  );
};

export default Bumps;
