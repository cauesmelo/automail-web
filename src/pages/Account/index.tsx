import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
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
import CheckBox from '../../components/checkBox';
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

interface formData {
  value: string;
}

const AccountContainer: React.FC = () => {
  const { user } = useAuth();
  const [data, setData] = useState<userData>();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((dataTimezone: formData) => {
    console.log(dataTimezone);
  }, []);

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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <BumpSettingsTitle>
              <h2>Configurações de reenvio</h2>
            </BumpSettingsTitle>
            <BumpSettingsContent>
              <BumpSettingsRow>
                <h4>Hora local:</h4>
                <TimezoneSelect name="timezone" />
              </BumpSettingsRow>
              <BumpSettingsRow>
                <h4>Dias de envio:</h4>
                <div className="whitebg">
                  <DaysPicker name="days" />
                </div>
              </BumpSettingsRow>
              <BumpSettingsRow>
                <h4>Horário de envio:</h4>
                <div className="whitebg">
                  <div className="hourPickerContainer">
                    <p>entre</p>
                    <HourPicker name="startHour" />
                    <p>e</p>
                    <HourPicker name="endHour" />
                  </div>
                </div>
              </BumpSettingsRow>
              <BumpSettingsRow>
                <h4>Enviar copia:</h4>
                <div className="whitebg">
                  <CheckBox
                    name="copy"
                    defaultChecked={data?.bumpSettings.bumpCopy}
                  />
                </div>
              </BumpSettingsRow>
              <Button type="submit" onClick={showData}>
                Salvar Mudanças
              </Button>
            </BumpSettingsContent>
          </Form>
        </BumpSettings>
      </Content>
    </Container>
  );
};

export default AccountContainer;
