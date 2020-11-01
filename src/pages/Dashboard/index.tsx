import React, { useCallback, useState } from 'react';
import { useGoogleLogout } from 'react-google-login';
import { MdEmail, MdSettings, MdPerson } from 'react-icons/md';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  Logo,
  MenuHeader,
  AccountHeader,
  LogoutButton,
  TabsButtonContainer,
  TabButton,
  TabsContentContainer,
} from './styles';

import Button from '../../components/Button';
import Account from '../Account';
import Bumps from '../Bumps';
import Emails from '../Emails';

import logo from '../../assets/logo.png';

const Dashboard: React.FC = () => {
  const { user, clearCache } = useAuth();
  const [tab, setTab] = useState(0);

  const clientId =
    '534022452713-j012fsh35ahevd5v1an97pbj4ubclid0.apps.googleusercontent.com';

  const { signOut } = useGoogleLogout({
    clientId,
  });

  function signOutAndClearCache() {
    signOut();
    clearCache();
  }

  function handleTabClick(tabNumber: number) {
    setTab(tabNumber);
  }

  const renderTab = useCallback(() => {
    switch (tab) {
      case 0:
        return <Emails />;
      case 1:
        return <Bumps />;
      case 2:
        return <Account />;
      default:
        return null;
    }
  }, [tab]);

  return (
    <Container>
      <Header id="page-header">
        <Logo>
          <img src={logo} alt="automail" />
        </Logo>
        <MenuHeader>
          <AccountHeader>
            <p>
              Signed as
              <br />
              {user.name}
            </p>
            <Button onClick={signOutAndClearCache}>
              <LogoutButton>Logout</LogoutButton>
            </Button>
          </AccountHeader>
        </MenuHeader>
      </Header>
      <TabsButtonContainer>
        <TabButton selected={tab === 0} onClick={() => handleTabClick(0)}>
          <MdEmail />
          <span>Email</span>
        </TabButton>
        <TabButton selected={tab === 1} onClick={() => handleTabClick(1)}>
          <MdSettings />
          <span>Reenvios</span>
        </TabButton>
        <TabButton selected={tab === 2} onClick={() => handleTabClick(2)}>
          <MdPerson />
          <span>Conta</span>
        </TabButton>
      </TabsButtonContainer>
      <TabsContentContainer>{renderTab()}</TabsContentContainer>
    </Container>
  );
};

export default Dashboard;
