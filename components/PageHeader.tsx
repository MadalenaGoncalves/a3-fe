import styled from 'styled-components';
import media from '../styles/media';
import { font__footerLink } from '../styles/styleguide/typography';

export default styled.header`
  background: white;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 60px;
  padding: 0 1rem;
  
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`
    bottom: 0;
    right: auto;

    height: 100%;
    max-height: 100vh;
    width: 230px;
    max-width: 230px;
    
    padding: 0;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    img {
      margin-top: 0.67em;
      margin-left: 15px;
    }
  `};
`;

export const MainContainer = styled.div`
  margin-left: 0;
  
  ${media.tablet`
    margin-left: 230px;
  `};

  main {
    margin-top: 85px;

    ${media.tablet`
      margin-top: 0px;
      margin-left: 15px;
    `};
  }
`;

export const FooterLinks = styled.div`
  ${font__footerLink};

  margin-top: auto;
  margin-left: 15px;
  margin-bottom: 1rem;
  margin-right: 15px;

  a {
    display: blocK;
    margin-top: 5px;
    color: currentColor;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    };
  }

  display: none;
  ${media.tablet`
    display: block;
  `};
`;