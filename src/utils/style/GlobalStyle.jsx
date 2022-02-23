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
  
  input, .input-date {
    font-family: sans-serif;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.field};
    background-color: ${({ theme }) => theme.colors.lightBackground};
    margin-top: 8px;
    padding: 14px;
    border: none;
  
    ::placeholder {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.placeholder};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  
    &:focus {
      background-color: ${({ theme }) => theme.colors.light};
      outline: 1px solid ${({ theme }) => theme.colors.light};
      box-shadow: 0px 0px 7px ${({ theme }) => theme.colors.shadow};
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  .css-6hp17o-MuiList-root-MuiMenu-list {
    display: grid;
  }
  `;
