import styled, { css } from 'styled-components';
import media from '../../styles/media';
import { font__footerLink } from '../../styles/styleguide/typography';

export const Header = styled.header`
  background-color: ${(props: any) => props.theme.colors.white};
  border-bottom: 1px solid rgba(0,0,0,0.04);
  height: ${props => props.theme.toRem(60)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ${media.tablet`
    border-bottom: none;
    bottom: 0;
    right: auto;
    height: 100%;
    max-height: 100vh;
    width: 250px;
  `};
`;

export const HeaderContent = styled.div`
  padding: 0 ${(props: any) => props.theme.spacing._16};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`
    height: 100%;
    box-sizing: border-box;
    padding-top: 40px;
    padding-bottom: 20px;
    padding-left: 40px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `};
`;

export const JumpToMainLink = styled.a`
  position: absolute;
  left: -999999px;
  top: -999999px;
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
      margin-right: ${(props: any) => props.theme.spacing._15};
    `};
  }
`;

export const FooterLinks = styled.div`
  display: none;
  margin: auto ${props => props.theme.spacing._15} ${props => props.theme.spacing._16};

  ${media.tablet`
    display: block;
    margin-left: 0;
    margin-right: 0;
  `};
  
  div {
    margin-top: 7px;
  }
  a {
    ${font__footerLink};
  }
`;

export const MobileFooter = styled.div`
  background: ${props => props.theme.colors.yellow};
  margin-top: ${props => props.theme.spacing._32};
  padding: ${props => props.theme.spacing._40} ${props => props.theme.spacing._16};

  ${media.tablet`
    display: none;
  `};
  
  a {
    ${font__footerLink};
    display: block;
    padding-bottom: ${props => props.theme.spacing._12};
  }
`;

type SimplePageProps = {
  projekte?: boolean;
  fullWidth?: boolean;
};
export const SimplePage = styled.div<SimplePageProps>`
  margin-top: 55px;
  margin-bottom: ${props => props.theme.spacing._96};
  padding: 0 1rem;
  
  ${props => !props.fullWidth && css`
    max-width: 980px;
  `};

  h1, h2 {
    font-family: ${props => props.theme.fonts.family.secondary};
  }

  h1{
    font-weight: ${props => props.theme.fonts.weight.normal};
    font-size: ${props => props.theme.fonts.size._32};
  }

  h2 {
    font-weight: ${props => props.theme.fonts.weight.bold};
    font-size: ${props => props.theme.fonts.size._18};
    // margin-top: ${props => props.theme.spacing._40};
  }

  p {
    font-weight: ${props => props.theme.fonts.weight.light};
    line-height: 19.1px;
  }

  a {
    color: ${props => props.projekte ? props.theme.colors.projekte : props.theme.colors.linkYellow};
    font-weight: ${props => props.theme.fonts.weight.light};
    spacing: 0.126px;
  }
`;
