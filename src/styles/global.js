import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: #F8F9FA;
    color: #333;
  }
  button, input {
    font-family: 'Nunito Sans', sans-serif;
  }
`;