import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BG_LIGHT_YELLOW};
  }
  
  body, button {
    font-family: 'Nunito', sans-serif;
    color: ${({ theme }) => theme.COLORS.BROWN_900};
  }

  body {
    font-size: 1.6rem;
  }
`;