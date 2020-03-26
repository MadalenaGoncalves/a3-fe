import styled, { css } from 'styled-components';
import media from '../../../styles/media';
import { Enum_Componentprojectcontentimages_Span as ColumnSpan } from '../../../models/types';

export const ProjectHeader = styled.h1`
  margin-top: 0;
  ${media.tablet`
    margin-bottom: 0;
  `};
`;

type ContentGridLayoutProps = { columns: ColumnSpan; };
export const ContentGridLayout = styled.div<ContentGridLayoutProps>`
  display: grid;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr;
  
  ${props => props.columns === ColumnSpan.Two && css`
    ${media.tablet`
      grid-template-columns: 1fr 1fr;
    `};
  `};

  ${props => props.columns === ColumnSpan.Three && css`
    ${media.tablet`
      grid-template-columns: 1fr 1fr 1fr;
    `};
  `};

  img {
    max-width: 100%;
  }
  margin-top: 4rem;
  &:first-child {
    margin-top: 0;
  }
`;

export const ProjectTopContent = styled(ContentGridLayout)`
  .cover { grid-area: cover; }
  .header { grid-area: header; }
  .description { grid-area: description; }
  .meta { grid-area: meta; }

  grid-template-areas:
    "header"
    "cover"
    "description"
    "meta";
  ${media.tablet`
    grid-template-areas:
      "cover header"
      "cover description"
      "cover meta";
  `};
`;


export const CoverPhoto = styled.img`
  max-width: 100%;
  width: 100%;
`;

export const Figure = styled.figure`
  margin: 2.5rem 0;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  
  img {
    display: block;
    margin: 0 auto;
    margin-top: 2.5rem;
    &:first-child {
      margin-top: 0;
    }

    max-width: 100%;
    height: auto;
    // max-height: 100vh;
  }
`;
