import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
      font-family: arial;
      font-weight: normal;
      font-style: normal;
      box-sizing: border-box;
      font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 2;
  }
  div {
    margin: 0;
  }
`;
export default GlobalStyles;
