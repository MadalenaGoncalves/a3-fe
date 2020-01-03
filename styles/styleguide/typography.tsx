import { css } from 'styled-components';

export const font__pageTitle = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: ${props => props.theme.fonts.size._30};
  line-height: 1.7;
`;

export const font__projectsTitle = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: ${props => props.theme.fonts.size._18};
`;

export const font__projectMetaTitle = css`
  font-weight: ${props => props.theme.fonts.weight.bold};
  font-size: ${props => props.theme.fonts.size._14};
  line-height: 1.7;
  text-transform: uppercase;
`;

export const font__projectMetaText = css`
  font-size: ${props => props.theme.fonts.size._14};
  line-height: 1.7;
`;

export const font__projectOtherProjects = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  text-decoration: none;
  text-transform: uppercase;
`;

export const font__footerLink = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-size: ${props => props.theme.fonts.size._14};
  line-height: 1.2;
  text-decoration: none;
  color: currentColor;
  &:hover {
    text-decoration: underline;
  };
`;

export const font__menuLink_tabletUp = css`
  font-size: ${props => props.theme.fonts.size._18};
`;

export const font__menuLink = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-size: ${props => props.theme.fonts.size._48};
  line-height: 2.2;
  text-decoration: none;
  text-transform: uppercase;
`;