import styled from 'styled-components';

import media from '../../styles/media';
import { font__footerLink } from '../../styles/styleguide/typography';

export default styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
    ${media.mobileL`
      flex-direction: row;
    `};
  }

  li {
    list-style-type: none;
    margin-right: 1.4rem;
    margin-bottom: 0.3rem;
    
    &:last-child {
      margin-right: 0;
    }
  }

  a {
    ${font__footerLink};
    color: ${props => props.theme.colors.primary};
    border-bottom: 2.3px solid ${props => props.theme.colors.footerBg};
    &:hover {
      border-bottom-color: ${props => props.theme.colors.white};
    }
  }
`;