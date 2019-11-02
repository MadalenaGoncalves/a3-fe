import { css } from 'styled-components';

let breakpoints = {} as any;
breakpoints.mobileS = '320';
breakpoints.mobileM = '375';
breakpoints.mobileL = '425';
breakpoints.tablet = '768';
breakpoints.laptop = '1024';
breakpoints.laptopL = '1440';
breakpoints.desktop = '2560';

let media = [] as any;
media = Object.keys(breakpoints).reduce((acc: any, label: string) => {
  acc[label] = (...args: any[]) => css`
     @media (min-width: ${breakpoints[label]}px) {
        ${css(...(args as [any]))};
     }
  `;
  return acc;
}, {})

export default media;
