import React, { useEffect, useState } from 'react';
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
import TimezoneSelect from '../../components/TimezoneSelect';
import api from '../../services/api';

interface userData {
  name: string;
  email: string;
  createdAt: Date;
  formattedCreatedAt: string;
  userType: string;
  bumpSettings: {
    timezone: string;
    bumpDays: string[];
    bumpTimeStart: string;
    bumpTimeEnd: string;
    bumpCopy: boolean;
  };
}

const AccountContainer: React.FC = () => {
  const { user } = useAuth();
  const [data, setData] = useState<userData>();
  const [selectedTimezone, setSelectedTimezone] = useState<string>();

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/account/`, {
        params: {
          userEmail: user.email,
        },
      });
      console.log('buscando dados');
      setData(response.data);
    }
    loadData();
  }, [user.email]);

  function showData() {
    console.log(data?.bumpSettings.timezone);
  }

  const handleCopy = () => {
    if (data) {
      const newData = data;
      newData.bumpSettings.bumpCopy = !data.bumpSettings.bumpCopy;
      setData(newData);
    }
  };

  const handleTimezoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimezone(e.target.value);
    const newData = data as userData;
    newData.bumpSettings.timezone = selectedTimezone || '-3.0';
    setData(newData);
  };

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
                    defaultValue={data?.name}
                    type="text"
                    name="name"
                    placeholder=""
                  />
                  <Button>Atualizar Nome</Button>
                </form>
              </div>
              <div>
                <h4>E-mail:</h4>
                <p>{data?.email}</p>
              </div>
              <div>
                <h4>Usuário desde:</h4>
                <p>{data?.createdAt}</p>
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
              <TimezoneSelect
                selected={selectedTimezone}
                onChange={handleTimezoneChange}
              />
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
                  <input
                    type="checkbox"
                    id="copy"
                    name="copy"
                    defaultChecked={data?.bumpSettings.bumpCopy}
                    onChange={handleCopy}
                  />
                  Não enviar copias para minha caixa de entrada.
                </label>
              </div>
            </BumpSettingsRow>
            <Button onClick={showData}>Salvar Mudanças</Button>
          </BumpSettingsContent>
        </BumpSettings>
      </Content>
    </Container>
  );
};

export default AccountContainer;
