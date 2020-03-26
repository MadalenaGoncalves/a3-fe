import styled from 'styled-components';
import { font__projectOtherProjects } from '../styles/styleguide/typography';

type StyledLinkProps = { projekte?: boolean; };
export const StyledLink = styled.a<StyledLinkProps>`
  ${font__projectOtherProjects};
  color: currentColor;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 1px solid transparent; 

  &:hover {
    border-bottom: 1px solid ${(props: any) => props.projekte 
        ? props.theme.colors.projekte 
        : props.theme.colors.linkYellow};
  }
`;


export const StyledBackLink = styled(StyledLink)`
  position: relative;
  padding-left: 1rem;
  &:before {
    content: "<";
    position: absolute;
    top: -1px;
    left: 0;
  }
`;