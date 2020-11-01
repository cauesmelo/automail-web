import React from 'react';

import { FaCircle } from 'react-icons/fa';

import { Container } from './styles';

const DaysBall: React.FC = () => {
  return (
    <Container>
      <FaCircle />
      <FaCircle />
      <FaCircle />
      <FaCircle />
    </Container>
  );
};

export default DaysBall;
