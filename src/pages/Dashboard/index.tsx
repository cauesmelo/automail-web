import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { sign } from 'crypto';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  Logo,
  MenuHeader,
  AccountHeader,
  LogoutButton,
  EmailsContainer,
  BumpsContainer,
  TitleContainer,
  Content,
  AccountContainer,
} from './styles';

import Tab from '../../components/Tabs/Tab/Tab';
import Tabs from '../../components/Tabs/Tabs';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { user, clearCache } = useAuth();
  const clientId =
    '534022452713-j012fsh35ahevd5v1an97pbj4ubclid0.apps.googleusercontent.com';

  const { signOut } = useGoogleLogout({
    clientId,
  });

  function signOutAndClearCache() {
    signOut();
    clearCache();
  }

  return (
    <Container>
      <Header id="page-header">
        <Logo>
          <p>LOGO</p>
        </Logo>
        <MenuHeader>
          <AccountHeader>
            <p>
              Signed as
              <br />
              {user.email}
            </p>
            <Button onClick={signOutAndClearCache}>
              <LogoutButton>Logout</LogoutButton>
            </Button>
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
