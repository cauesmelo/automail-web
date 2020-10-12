import React, { useCallback, useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Listing,
  List,
  CreateList,
} from './styles';

import logoImg from '../../assets/logo.svg';

interface addListFormData {
  name: string;
}

interface List {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const { addToast } = useToast();

  const [lists, setLists] = useState<List[]>([]);

  const handleAddList = useCallback(
    async (data: addListFormData) => {
      const response = await api.post('/lists', data);

      setLists([...lists, response.data]);

      addToast({
        type: 'success',
        title: 'Lista Adicionada.',
      });
    },
    [addToast, lists],
  );

  useEffect(() => {
    api.get(`/lists`).then(response => {
      setLists(response.data);
    });
  }, [user.id]);

  async function handleDeleteList(id: string) {
    try {
      await api.delete(`/lists/${id}`);
      const newLists = lists.filter(list => list.id !== id);
      setLists(newLists);
      addToast({
        type: 'success',
        title: 'Lista removida com sucesso.',
      });
    } catch (err) {
      console.log(err);
      addToast({
        type: 'error',
        title: 'Erro ao deletar lista.',
      });
    }
  }

  // TODO
  async function handleOpenList(id: string) {
    console.log(id);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Litterae" />

          <Profile>
            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <CreateList>
          <Form onSubmit={handleAddList}>
            <Input name="name" placeholder="nome da lista" />
            <Button type="submit">Adicionar lista</Button>
          </Form>
        </CreateList>
        <Listing>
          <h1>Listas de e-mails</h1>
          {lists.map(list => (
            <List key={list.id}>
              <div>
                <strong>{list.name}</strong>
              </div>
              <button type="button" onClick={() => handleOpenList(list.id)}>
                <span>Abrir lista</span>
              </button>
              <button type="button" onClick={() => handleDeleteList(list.id)}>
                <span>Excluir lista</span>
              </button>
            </List>
          ))}
        </Listing>
      </Content>
    </Container>
  );
};

export default Dashboard;
