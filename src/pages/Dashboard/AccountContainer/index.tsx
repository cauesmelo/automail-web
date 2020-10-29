import React from 'react';
import { useAuth } from '../../../hooks/auth';

import { 
    AccountInformationTitle, 
    AccountInformation, 
    AccountInformationUser, 
    AccountInformationType,
    Container,
    Content,
    TitleContainer 
} from "./styles";

import Button from '../../../components/Button';
import BumpSettingsContainer from './BumpSettingContainer/index';

const AccountContainer: React.FC = () => {
    const { user } = useAuth();

    return(
        <Container>
            <TitleContainer>
              <h1>Configurações de Conta</h1>
            </TitleContainer>
            <Content>
              
              <AccountInformation>
              <AccountInformationTitle>
                <h2>Informações de conta</h2>
              </AccountInformationTitle>
                <AccountInformationUser>
                  <div>
                    <form action="">
                      <label>Nome Completo: </label>
                      <input defaultValue={user.name} type="text" name="username" placeholder=""/>
                      <Button>Atualizar Nome</Button>
                    </form>
                  </div>
                  <div>
                    <p>
                      <span>E-mail:</span> {user.email}
                    </p>
                  </div>
                </AccountInformationUser>
                <AccountInformationType>
                  <div>
                  <p>
                    <span>Premium:</span> Teste gratuito. 30 dias restantes.
                  </p>
                  <Button>Comprar plano Premium</Button>
                  </div>
                  
                </AccountInformationType>
              </AccountInformation>
              <BumpSettingsContainer></BumpSettingsContainer>
            </Content>
        </Container>
    );
};

export default AccountContainer;