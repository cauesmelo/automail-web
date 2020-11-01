import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select';
import {
  AccountInformationTitle,
  AccountInformation,
  AccountInformationContent,
  AccountInformationUser,
  AccountInformationType,
  Container,
  Content,
  TitleContainer,
  BumpSettings,
  BumpSettingsTitle,
  BumpSettingsContent,
  BumpSettingsRow,
} from './styles';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';
import DaysPicker from '../../components/DaysPicker';
import HourPicker from '../../components/HourPicker';

const AccountContainer: React.FC = () => {
  const { user } = useAuth();
  const [selectedTimezone, setSelectedTimezone] = useState({});

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
        <BumpSettings>
          <BumpSettingsTitle>
            <h2>Configurações de reenvio</h2>
          </BumpSettingsTitle>
          <BumpSettingsContent>
            <BumpSettingsRow>
              <h4>Hora local:</h4>
              <div>
                <TimezoneSelect
                  value={selectedTimezone}
                  onChange={setSelectedTimezone}
                />
              </div>
            </BumpSettingsRow>
            <BumpSettingsRow>
              <h4>Dias de envio:</h4>
              <div className="whitebg">
                <DaysPicker />
              </div>
            </BumpSettingsRow>
            <BumpSettingsRow>
              <h4>Horário de envio:</h4>
              <div className="whitebg">
                <HourPicker />
              </div>
            </BumpSettingsRow>
            <BumpSettingsRow>
              <h4>Enviar copia:</h4>
              <div className="whitebg">
                <label className="copyLabel" htmlFor="copy">
                  <input type="checkbox" id="copy" name="copy" checked />
                  Não enviar copias para minha caixa de entrada.
                </label>
              </div>
            </BumpSettingsRow>
            <Button>Salvar Mudanças</Button>
          </BumpSettingsContent>
        </BumpSettings>
      </Content>
    </Container>
  );
};

export default AccountContainer;
