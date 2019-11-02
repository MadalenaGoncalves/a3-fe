import styled from 'styled-components';
import { section__vertical_spacing, page_layout__margin } from '../../styleguide/spacing';

export default styled.section`
  ${page_layout__margin};
  ${section__vertical_spacing};

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  // display: flex;
  // flex-flow: row wrap;
`;