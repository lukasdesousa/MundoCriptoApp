import { createGlobalStyle, CSSProperties } from 'styled-components';

export const GlobalStyle = createGlobalStyle<CSSProperties>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    html, body, #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
  }

  main {
    flex: 1;
  }

`;
