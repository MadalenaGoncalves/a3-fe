import styled from 'styled-components';
import media from '../../styles/media';
import { font__footerLink } from '../../styles/styleguide/typography';

export default styled.header`
  background: white;
  height: ${props => props.theme.toRem(60)};
  padding: 0 ${(props: any) => props.theme.spacing._16};

  position: fixed;
  top: 0;
  left: 0;
  right: 0; 

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`
    bottom: 0;
    right: auto;

    height: 100%;
    max-height: 100vh;
    width: ${(props: any) => props.theme.toRem(230)};
    max-width: ${(props: any) => props.theme.toRem(230)};
    
    padding: 0;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    img {
      margin-top: ${(props: any) => props.theme.spacing._10};
      margin-left: ${(props: any) => props.theme.spacing._15};
    }
  `};
`;

export const MainContainer = styled.div`
  ${media.tablet`
    margin-left: ${(props: any) => props.theme.toRem(230)};
  `};

  main {
    margin-top: ${props => props.theme.toRem(85)};

    ${media.tablet`
      margin-top: 0px;
      margin-left: ${(props: any) => props.theme.spacing._15};
    `};
  }
`;

export const FooterLinks = styled.div`
  display: none;
  margin: auto ${props => props.theme.spacing._15} ${props => props.theme.spacing._16};

  ${media.tablet`
    display: block;
  `};
  
  a {
    ${font__footerLink};
    display: block;
    margin-top: 5px;
  }
`;

export const MobileFooter = styled.div`
  background: ${props => props.theme.colors.lightgray};
  margin-top: ${props => props.theme.spacing._32};
  padding: ${props => props.theme.spacing._40} ${props => props.theme.spacing._16};

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    display: none;
  `};
  
  a {
    ${font__footerLink};
    padding: ${props => props.theme.spacing._12} ${props => props.theme.spacing._16};
  }
`;
