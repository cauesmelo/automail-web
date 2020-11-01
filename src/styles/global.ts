import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: white;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 18px sans-serif;
  }

  #root {
    width: 100%;
    margin: 0 auto;
    font-family: 'Signika', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  @media (min-width: 480px){
    max-width: 400px
  }
`;
