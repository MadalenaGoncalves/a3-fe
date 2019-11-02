import styled from 'styled-components';

import { page_layout__margin } from '../../styleguide/spacing';

export default styled.hr`
  ${page_layout__margin};
  margin-top: 0;
  margin-bottom: 0;
  border: 0;
  border-top: 2px dotted ${props => props.theme.colors.lightgray};
`;