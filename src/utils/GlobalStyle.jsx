import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    // font-size: 72.5%;
    /* scroll-behavior: smooth; */
    /* 1rem = 10px */
    overflow-x: hidden;
  }
  body {
    overflow-x: hidden;
    scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
  }
  h1{
    color:${({ theme }) => theme.colors.heading};
    font-size: 6rem;
    font-weight: 900;
  }
  h2 {
     color: ${({ theme }) => theme.colors.heading};
     font-size: 4.4rem;
     font-weight: 300;
     white-space: normal;
     text-align: center;
    }
    h3 {
    font-size: 1.8rem;
    font-weight: 400;
  }
li{
    list-style: none;
}
`;
