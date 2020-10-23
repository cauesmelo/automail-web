import { sign } from 'crypto';
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';
import { Container, Content, Header, GoogleLoginContainer } from './styles';

const Home: React.FC = () => {
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const clientId =
    '534022452713-j012fsh35ahevd5v1an97pbj4ubclid0.apps.googleusercontent.com';

  // TODO: trocar o any
  function onSuccess(googleUser: any) {
    const idToken = googleUser.getAuthResponse().id_token;
    signIn(idToken);
  }

  function onFailure() {
    console.log('falhou.');
  }

  return (
    <Container>
      <Header>
        <GoogleLoginContainer>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
            style={{ marginTop: '100px' }}
            isSignedIn
            scope="https://mail.google.com/"
          />
        </GoogleLoginContainer>
      </Header>
      <Content>
        <p>Placeholder landing page</p>
      </Content>
    </Container>
  );
};

export default Home;
