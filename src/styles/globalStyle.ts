import { createGlobalStyle } from 'styled-components';

import { headingCSS, paragraphgCSS } from '@components/generics';

import { BASE_FONT_SIZE } from '@styles/configs';

/**
 * GlobalStyle
 */
const GlobalStyle = createGlobalStyle`
  html, body, ul, li, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: ${BASE_FONT_SIZE}px;
    font-family: sans-serif;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }

  li{
    text-indent: 0;
    list-style-type: none;
  }

  button{
    cursor: pointer;
  }
  
  section{
    margin: 40px 0;
  }

  h1 {
    ${headingCSS.h1}
  }

  h2 {
    ${headingCSS.h2}
  }

  h3 {
    ${headingCSS.h3}
  }

  h4 {
    ${headingCSS.h4}
  }

  h5 {
    ${headingCSS.h5}
  }

  h6 {
    ${headingCSS.h6}
  }

  p {
    ${paragraphgCSS}
  }
`;

/**
 * Exports
 */
export { GlobalStyle };
