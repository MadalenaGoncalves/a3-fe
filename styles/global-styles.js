import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,500,600&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
  
  ${normalize};

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.theme.colors.gray};
  }

  h1 {
    font-family: 'Raleway', 'Open Sans', sans-serif;
    font-weight: 200;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }

  p {
    margin-top: 0;
    margin-bottom: 1em;
  }
`;