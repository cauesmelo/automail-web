import React, { useRef, useCallback } from 'react';

import Modal from '../Modal';

interface IList {
  id: string;
  name: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  // handleAddFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
}

const ModalGoogleSettings: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  // const handleSubmit = useCallback(
  //   async (data: ICreateFoodData) => {
  //     handleAddFood(data);

  //     setIsOpen();
  //   },
  //   [handleAddFood, setIsOpen],
  // );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>Lista com e-mails</h1>
      {/* {list.name} */}
    </Modal>
  );
};

export default ModalGoogleSettings;
