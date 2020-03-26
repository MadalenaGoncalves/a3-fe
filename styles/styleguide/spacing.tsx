import { css } from 'styled-components';
import media from '../media';

export const page_layout__margin = css`
  margin-left: 1rem;
  margin-right: 1rem;
  max-width: 1140px;
  
  ${media.tablet`
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  `};
  
  ${media.laptopL`
    margin-left: auto;
    margin-right: auto;
  `};
`;

export const section__vertical_spacing = css`
  margin-top: ${(props: any) => props.theme.spacing.sectionVerticalSpacing};
  margin-bottom: ${(props: any) => props.theme.spacing.sectionVerticalSpacing};
`;
