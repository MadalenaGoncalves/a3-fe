import styled from 'styled-components';
import media from '../../styles/media';
import { font__projectsTitle } from '../../styles/styleguide/typography';

export const GridList = styled.div`
  ${media.laptopL`
    margin-left: auto;
    margin-right: auto;
  `};

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
`;

export const GridItem = styled.article`
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    // img {
    //   opacity: 1;
    //   transition: opacity 0.5s cubic-bezier(.6,.49,.39,.49);
      
    //   &:hover {
    //     opacity: 0.5;
    //   }
    // }
    &:hover h2 {
      text-decoration: underline;
    }
  }

  // figure {
  //   height: 100%;
  //   margin: 0;
  //   text-align: center;
  //   display: flex;
  //   flex-flow: column nowrap;
  // }

  // figcaption {
  //   display: block;
  //   margin-top: auto;
  // }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: auto;
    margin-bottom: auto;
  }

  h2 {
    ${font__projectsTitle};
    margin-top: 1rem;
  }
`;

type ImageProps = {
  url: string;
}
export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 250px;
  // background: rgb(232, 251, 252);
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url('${props => props.url}');
`;