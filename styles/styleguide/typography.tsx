import { css } from 'styled-components';
import media from './../media';

export const font__homepageLinks = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: ${props => props.theme.fonts.size._18};
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;

export const font__pageTitle = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: ${props => props.theme.fonts.size._30};
  line-height: 1.7;
`;

export const font__projectsTitle = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: ${props => props.theme.fonts.size._16};
  text-align: center;
`;

export const font__projectMetaTitle = css`
  font-weight: ${props => props.theme.fonts.weight.bold};
  font-size: ${props => props.theme.fonts.size._14};
  line-height: 19.6px;
  text-transform: uppercase;
`;

export const font__projectMetaText = css`
  font-size: ${props => props.theme.fonts.size._14};
  line-height: 1.4;
`;

export const font__projectOtherProjects = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  text-decoration: none;
  text-transform: uppercase;
`;

export const font__footerLink = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  font-size: ${props => props.theme.fonts.size._14};
  text-decoration: none;
  text-transform: uppercase;
  color: currentColor;

  ${media.tablet`
    font-size: ${(props: any) => props.theme.fonts.size._12};
  `};
`;

export const font__menuLink = css`
  font-family: ${props => props.theme.fonts.family.secondary};
  line-height: 2.2;
  color: currentColor;
  text-decoration: none;
  text-transform: uppercase;
  
  ${media.tablet`
    font-size: ${(props: any) => props.theme.fonts.size._22};
    line-height: 1;
  `};
`;