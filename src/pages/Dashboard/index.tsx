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

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <Logo>
          <p>LOGO</p>
        </Logo>
        <MenuHeader>
          <AccountHeader>
            Signed as cauesmelo@gmail.com
            <LogoutButton>Logout</LogoutButton>
          </AccountHeader>
          <ButtonMenu>Emails</ButtonMenu>
          <ButtonMenu>Bumps</ButtonMenu>
          <ButtonMenu>Account</ButtonMenu>
        </MenuHeader>
      </Header>
      <EmailsContainer>
        <TitleContainer>
          <h1>Emails em contato</h1>
          <p>
            Abaixo você verá uma lista dos seus e-mails que você solicitou um
            re-contato
          </p>
        </TitleContainer>
        <Content />
      </EmailsContainer>
      <BumpsContainer>
        <TitleContainer>
          <h1>Configurações de re-contato</h1>
          <p>
            Nós já configuramos um re-contato padrão. Mas sinta-se livre para
            modificar como preferir.
            <br />
            Seja responsável com os re-contatos.
          </p>
        </TitleContainer>
        <Content />
      </BumpsContainer>
      <AccountContainer>
        <TitleContainer>
          <h1>Configurações de Conta</h1>
        </TitleContainer>
        <Content />
      </AccountContainer>
    </Container>
  );
};

export default Dashboard;
