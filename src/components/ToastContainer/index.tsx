import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './styles';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      config: {
        duration: 200,
      },
      from: {
        right: '-120%',
      },
      enter: {
        right: '0%',
        opacity: '1',
      },
      leave: {
        opacity: '0',
      },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
