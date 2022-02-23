import { createGlobalStyle } from 'styled-components';

/**
 * CSS Global styles for the site using styled.components
 */
export const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif !important; 
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #38393b;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
  
  input {
    font-family: sans-serif;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  .css-6hp17o-MuiList-root-MuiMenu-list {
    display: grid;
  }
  `;
