import React from 'react';
import {
  AccountInformationTitle,
  AccountInformation,
  AccountInformationContent,
  AccountInformationUser,
  AccountInformationType,
  Container,
  Content,
  TitleContainer,
} from './styles';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

const AccountContainer: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <TitleContainer>
        <h1>Configurações de Conta</h1>
      </TitleContainer>
      <Content>
        <AccountInformation>
          <AccountInformationTitle>
            <h2>Informações de conta</h2>
          </AccountInformationTitle>
          <AccountInformationContent>
            <AccountInformationUser>
              <div>
                <form action="">
                  <h4>Nome Completo:</h4>
                  <input
                    defaultValue={user.name}
                    type="text"
                    name="name"
                    placeholder=""
                  />
                  <Button>Atualizar Nome</Button>
                </form>
              </div>
              <div>
                <p>
                  <h4>E-mail:</h4>
                  {user.email}
                </p>
              </div>
              <div>
                <h4>Usuário desde:</h4>
                <p>20/10/2020</p>
              </div>
            </AccountInformationUser>
            <AccountInformationType>
              <div>
                <h4>Tipo de conta:</h4>
                <div className="box">
                  <p>Teste gratuito (30 dias restantes)</p>
                  <Button>Comprar plano Premium</Button>
                </div>
              </div>
            </AccountInformationType>
          </AccountInformationContent>
        </AccountInformation>
      </Content>
    </Container>
  );
};

export default AccountContainer;
