import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: rgb(52, 61, 57);
  height: 2em;
  border: 0;
  border-radius: 100px;
  margin: 0px 20px;
  padding: 0 1.1em;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${shade(0.2, 'grey')};
  }
`;
