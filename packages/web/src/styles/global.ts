import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #434c5e;
    color: #333;
    -webkit-font-smoothing: antialiased !important
  }

  html, body, #root {
    height: 100%
  }

  ul {
    list-style: none;
  }
`;