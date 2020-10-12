import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #475161;
  height: 5.6em;
  border-radius: 1.0em;
  border: 0;
  padding: 0 1.6em;
  color: white;
  width: 100%;
  cursor: pointer;
  font-weight: 500;
  margin-top: 1.6em;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${shade(0.2, 'black')};
  }

  @media only screen and (max-width: 600px) {
    height: 3.7em;
    padding: 0 0.8em;
  }
`;
