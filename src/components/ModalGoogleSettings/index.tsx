import React from 'react';
import GoogleButton from 'react-google-button';
import { Container, Setting } from './styles';

import Modal from '../Modal';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  user: string;
  // handleAddFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
}

const ModalGoogleSettings: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  user,
}) => {
  async function handleConnectGmail() {
    console.log('test');
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h1>Configurações Google</h1>
        <Setting>
          <h2>Conta Google</h2>
          <GoogleButton
            onClick={() => {
              console.log('Google button clicked');
            }}
          />
        </Setting>
        <Setting>
          <h2>Conectar Gmail</h2>
          <GoogleButton
            onClick={() => {
              console.log('Google button clicked');
            }}
          />
        </Setting>
      </Container>
    </Modal>
  );
};

export default ModalGoogleSettings;
