import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (min-width: 600px) 

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
    margin: 8em 0;
    width: 34em;
    text-align: center;
    h1 {
      margin-bottom: 2.4em;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 2.4em;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: black;
    display: block;
    margin-top: 2.4em;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 1.6em;
    }

    &:hover {
      color: ${shade(0.2, 'black')};
    }
  }
`;
