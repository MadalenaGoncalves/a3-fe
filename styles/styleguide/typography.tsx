import { css } from 'styled-components';

export const font__pageTitle = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 1.7;
`;

export const font__projectsTitle = css`
font-family: ${props => props.theme.fonts.family.secondary};
font-weight: normal;
  // text-transform: uppercase;
  font-size: 1.1rem;
  // line-height: 1.7;
`;

export const font__projectMetaTitle = css`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.7;
`;

export const font__projectMetaText = css`
  font-size: 14px;
  line-height: 1.7;
`;

export const font__projectOtherProjects = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  text-decoration: none;
  text-transform: uppercase;
`;

export const font__footerLink = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-size: 14px;
  lineHeight: 1.2;
  text-decoration: none;
  &:hover: {
    text-decoration: none;
  }
`;

export const font__menuLink_tabletUp = css`
  font-size: 1.1rem;
`;

export const font__menuLink = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-size: 3rem;
  line-height: 2.2;
  text-decoration: none;
  text-transform: uppercase;
`;