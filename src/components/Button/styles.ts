import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #475161;
  height: 2em;
  border: 0;
  padding: 0 1.1em;
  color: white;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${shade(0.2, 'black')};
  }
`;
