import styled from 'styled-components';
import { font__heroImageTitle} from '../../styleguide/typography';

export default styled.h1`
  ${font__heroImageTitle};
  color: ${props => props.theme.colors.white};
  text-align: center;

  text-shadow: 0 1px 2px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.2)
`;