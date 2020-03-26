import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:200&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,700&display=swap');
  
  ${normalize};

  body, p {
    font-family: ${props => props.theme.fonts.family.primary};
    font-weight: ${props => props.theme.fonts.weight.normal};
    font-size: ${props => props.theme.fonts.size.base}px;
    color: ${props => props.theme.colors.gray};
  }

  h1 {
    font-family: ${props => props.theme.fonts.family.secondary};
    font-weight: ${props => props.theme.fonts.weight.light};
    font-weight: ${props => props.theme.fonts.size.light};
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  p {
    line-height: 20px;
    margin-bottom: ${props => props.theme.spacing._16};
  }
`;
