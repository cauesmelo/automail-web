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
    font: 10px sans-serif;
  }

  #root {
    max-width: 1024px;
    margin: 0 auto;
    padding: 4em 2em;
  }

  @media (min-width: 480px){
    max-width: 400px
  }
`;