import React, { useState } from 'react';

import { FaSearch, FaEye } from 'react-icons/fa';

import {
  Container,
  TitleContainer,
  ContentContainer,
  Status,
  StatusContainer,
  StatusBox,
  MenuContainer,
  TabsContainer,
  Tab,
  Search,
  IconContainer,
  TableContainer,
} from './styles';

import DaysBall from '../../components/DaysBall';

const Emails: React.FC = () => {
  const [tab, setTab] = useState(0);

  function handleTabClick(tabNumber: number) {
    setTab(tabNumber);
  }

  return (
    <Container>
      <TitleContainer>
        <h1>Seus emails para reenvio</h1>
        <p>
          Abaixo você virá uma lista com todos os e-mails que solicitou o
          reenvio.
        </p>
      </TitleContainer>
      <ContentContainer>
        <Status>
          <StatusContainer>
            <h3>Mensagens enviadas</h3>
            <StatusBox>
              <span className="number">0</span>
              <span className="period">Hoje</span>
            </StatusBox>
            <StatusBox>
              <span className="number">0</span>
              <span className="period">30 dias</span>
            </StatusBox>
            <StatusBox>
              <span className="number">0</span>
              <span className="period">6 meses</span>
            </StatusBox>
            <StatusBox>
              <span className="number">0</span>
              <span className="period">Desde início</span>
            </StatusBox>
          </StatusContainer>
          <StatusContainer>
            <h3>Mensagens recuperadas</h3>
            <StatusBox>
              <span className="number">0</span>
              <span className="period">Hoje</span>
            </StatusBox>
            <StatusBox>
              <span className="number">0</span>
              <span className="period">30 dias</span>
            </StatusBox>
            <StatusBox>
              <span className="number">0</span>
              <span className="period">6 meses</span>
            </StatusBox>
            <StatusBox>
              <span className="number">0</span>
              <span className="period">Desde início</span>
            </StatusBox>
          </StatusContainer>
        </Status>
        <MenuContainer>
          <TabsContainer>
            <Tab isActive={tab === 0} onClick={() => handleTabClick(0)}>
              <h4>Ativo</h4>
              <span className="tabNumber">1</span>
            </Tab>
            <Tab isActive={tab === 1} onClick={() => handleTabClick(1)}>
              <h4>Inativo/Completo</h4>
              <span className="tabNumber">0</span>
            </Tab>
          </TabsContainer>
          <Search>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Destinatário, assunto ou palavra-chave"
            />
            <IconContainer>
              <FaSearch />
            </IconContainer>
          </Search>
        </MenuContainer>
        <TableContainer>
          {tab === 0 ? (
            <table>
              <tr>
                <th>Data</th>
                <th>Destinatário</th>
                <th>Assunto</th>
                <th>Último envio</th>
                <th>Próximo envio</th>
                <th>
                  <FaEye />
                </th>
                <th>Envios</th>
                <th>Cancelar</th>
              </tr>
              <tr>
                <td>01/11/20</td>
                <td>cauesmelo@gmail.com</td>
                <td>Assunto Teste</td>
                <td>10/29 12:15 AM</td>
                <td>11/05 12:12 AM</td>
                <td>
                  <FaEye />
                </td>
                <td>
                  <DaysBall />
                </td>
                <td>
                  <u>Cancelar</u>
                </td>
              </tr>
              <tr>
                <td>01/11/20</td>
                <td>cauesmelo@gmail.com</td>
                <td>Assunto Teste</td>
                <td>10/29 12:15 AM</td>
                <td>11/05 12:12 AM</td>
                <td>
                  <FaEye />
                </td>
                <td>
                  <DaysBall />
                </td>
                <td>
                  <u>Cancelar</u>
                </td>
              </tr>
            </table>
          ) : (
            <table>
              <tr>
                <th>Data</th>
                <th>Destinatário</th>
                <th>Assunto</th>
                <th>Último envio</th>
                <th>Próximo envio</th>
                <th>
                  <FaEye />
                </th>
                <th>Envios</th>
                <th>Resposta</th>
              </tr>
              <tr>
                <td>02/11/20</td>
                <td>muuufolk@gmail.com</td>
                <td>Assunto Teste</td>
                <td>11/29 12:15 AM</td>
                <td>12/05 12:12 AM</td>
                <td>
                  <FaEye />
                </td>
                <td>
                  <DaysBall />
                </td>
                <td>Não</td>
              </tr>
            </table>
          )}
        </TableContainer>
      </ContentContainer>
    </Container>
  );
};

export default Emails;
