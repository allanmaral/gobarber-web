import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap');

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
  }

  body, input, button {
    -webkit-font-smoothing: antialiased;
    font-family: 'Lato', Arial, Helvetica, sans-serif
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight:normal;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
