import styled from 'styled-components';
import { font__footerLink } from './styleguide/typography';

export default styled.nav`
  display: flex;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    &:last-child {
      margin-left: 4rem;
    }
  }

  li {
    list-style-type: none;
    margin: 0.3rem 0;
  }

  a {
    ${font__footerLink};
    color: ${props => props.theme.colors.white};
    border-bottom: 3px solid ${props => props.theme.colors.footerBg};
    &:hover {
      border-bottom-color: ${props => props.theme.colors.white};
    }
  }
`;