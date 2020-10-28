import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Content,
  Header,
  GoogleLoginContainer,
  Parallax,
  FixedContent,
  Card,
  CardList,
  Footer
} from './styles';

import facebook from '../../assets/icons/facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import pinterest from '../../assets/icons/pinterest.svg';
import twitter from '../../assets/icons/twitter.svg';

import Button from '../../components/Button/index';

const Home: React.FC = () => {
  const { signIn } = useAuth();

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
      <Parallax>
        <div>
          <h2>Bem vindo ao Automail</h2>
        </div>
      </Parallax>
      <Content>



        <FixedContent>

          <h1>
            Ofertas Premium
          </h1>

          <CardList>
            <Card>
              <h2>Premium I</h2>
              <h4>Plano básico</h4>
              <p> - basic feature</p>
              <p> - basic feature</p>
              <p> - basic feature</p>
              <span><p> - intermediary feature</p></span>
              <span><p> - intermediary feature</p></span>
              <span><p> - Advanced feature</p></span>
              <span><p> - Advanced feature</p></span>
              <p>R$ 10,00 mensais</p>
              <Button>Assinar</Button>
            </Card>
            <Card>
              <h2>Premium II</h2>
              <h4>Plano Intermediário</h4>
              <p> - basic feature</p>
              <p> - basic feature</p>
              <p> - basic feature</p>
              <p> - intermediary feature</p>
              <p> - intermediary feature</p>
              <span><p> - Advanced feature</p></span>
              <span><p> - Advanced feature</p></span>
              <p>R$ 13,00 mensais</p>
              <Button>Assinar</Button>
            </Card>
            <Card>
              <h2>Premium III</h2>
              <h4>Plano Avançado</h4>
              <p> - basic feature</p>
              <p> - basic feature</p>
              <p> - basic feature</p>
              <p> - intermediary feature</p>
              <p> - intermediary feature</p>
              <p> - Advanced feature</p>
              <p> - Adcanced feature</p>
              <p>R$ 15,00 mensais</p>
              <Button>Assinar</Button>
            </Card>
          </CardList>

          <Footer>
          <h2>Se conecte conosco!</h2>
          <img src={facebook} alt=""/>
          <img src={linkedin} alt=""/>
          <img src={pinterest} alt=""/>
          <img src={twitter} alt=""/>

          </Footer>
        </FixedContent>
      </Content>
    </Container>
  );
};

export default Home;
