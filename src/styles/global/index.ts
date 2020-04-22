import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
