import React from 'react';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  Logo,
  MenuHeader,
  AccountHeader,
  LogoutButton,
  ButtonMenu,
  EmailsContainer,
  BumpsContainer,
  TitleContainer,
  Content,
  AccountContainer,
} from './styles';

import Tab from '../../components/Tabs/Tab/Tab';
import Tabs from '../../components/Tabs/Tabs';
import TabTitle from '../../components/Tabs/Tab/TabTitle/TabTitle';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header id="page-header">
        <Logo>
          <p>LOGO</p>
        </Logo>
        <MenuHeader>
          <AccountHeader>
            <p>Signed as email</p>
            <LogoutButton>Logout</LogoutButton>
          </AccountHeader>
        </MenuHeader>
      </Header>
      <Tabs>
        <Tab title="Emails">
          <EmailsContainer>
            <TitleContainer>
              <h1>Emails em contato</h1>
              <p>
                Abaixo você verá uma lista dos seus e-mails que você solicitou
                um re-contato
              </p>
            </TitleContainer>
            <Content />
          </EmailsContainer>
        </Tab>
        <Tab title="Bumps">
          <BumpsContainer>
            <TitleContainer>
              <h1>Configurações de re-contato</h1>
              <p>
                Nós já configuramos um re-contato padrão. Mas sinta-se livre
                para modificar como preferir.
                <br />
                Seja responsável com os re-contatos.
              </p>
            </TitleContainer>
            <Content />
          </BumpsContainer>
        </Tab>
        <Tab title="Account">
          <AccountContainer>
            <TitleContainer>
              <h1>Configurações de Conta</h1>
            </TitleContainer>
            <Content />
          </AccountContainer>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Dashboard;
