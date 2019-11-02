import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

// const fonts = css`
//   @font-face {
//     font-family: 'Open Sans', sans-serif;
//     src: url('/static/fonts/OpenSans-*.ttf') format('ttf');
//     font-style: normal;
//     font-weight: 400;
//     font-display: fallback; /* <- this can be added to each @font-face definition */
//   }
// `;

// font-family: ${props => props.theme.fonts.family.primary};

export default createGlobalStyle`
  ${normalize};

  body {
    font-family: ${props => props.theme.fonts.family.primary};
  }

  h1 {
    font-family: ${props => props.theme.fonts.family.secondary};
  }
`;