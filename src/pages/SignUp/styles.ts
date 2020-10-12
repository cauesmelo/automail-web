import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  justify-content: center;
  margin: 0 auto;

  width: 100%;
  max-width: 70em;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  justify-content: center;

  form {
    margin: 4em 0;
    width: 34em;
    text-align: center;
    h1 {
      margin-bottom: 2.4em;
    }
  }


  @media only screen and (max-width: 600px) {
    form {
      max-width: 25em;
      margin: 4em 0;
    }
  }
`;

export const LinkContainer = styled.div`
display: flex;

a {
  font-size: 1.4em;
  color: black;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
  margin: 0.3em;
  &:nth-child(2) {
    cursor: not-allowed;
    pointer-events: none;
    color: #ccc;
  }
}

`;
