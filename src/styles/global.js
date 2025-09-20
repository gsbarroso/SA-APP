import { createGlobalStyle } from 'styled-components';

// A palavra "export" aqui é crucial.
// Isso cria uma "exportação nomeada" chamada GlobalStyle.
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f8f9fa;
  }
`;