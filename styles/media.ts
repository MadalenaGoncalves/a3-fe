import { css } from 'styled-components';

let breakpoints = {} as any;
breakpoints.mobileS = 320;
breakpoints.mobileM = 375;
breakpoints.mobileL = 425;
breakpoints.tablet = 768;
breakpoints.laptop = 1024;
breakpoints.laptopL = 1440;
breakpoints.desktop = 2560;

let media = [] as any;
media = Object.keys(breakpoints).reduce((acc: any, label: string) => {
  acc[label] = (...args: any[]) => css`
     @media (min-width: ${breakpoints[label]}px) {
        ${css(...(args as [any]))};
     }
  `;
  return acc;
}, {})


// let breakpoints2 = {} as any;
// breakpoints2.mobileS = 320;
// breakpoints2.mobile = 375;
// breakpoints2.mobileL = 425;
// breakpoints2.tablet_portrait = 768;
// breakpoints2.tablet_landscape = 1024;
// breakpoints2.desktop = 1280;
// breakpoints2.desktopL = 1440;

// let media2 = [] as any;
// media2 = Object.keys(breakpoints2).reduce((acc: any, label: string, idx: number) => {
//   acc[`${label}_below`] = (...args: any[]) => css`
//     @media only screen and (max-width: ${breakpoints2[label] - 1}px) {
//         ${css(...(args as [any]))};
//     }
//   `;
//   acc[label] = (...args: any[]) => css`
//       @media only screen and (min-width: ${breakpoints2[label]}px and max-width: ${breakpoints2[idx - 1] - 1}px) {
//         ${css(...(args as [any]))};
//     }
//   `;
//   acc[`${label}_up`] = (...args: any[]) => css`
//      @media only screen and (min-width: ${breakpoints2[label]}px) {
//         ${css(...(args as [any]))};
//      }
//   `;
//   return acc;
// }, {})

export default media;
