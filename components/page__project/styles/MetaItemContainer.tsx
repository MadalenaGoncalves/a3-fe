import styled from 'styled-components';
import media from '../../../styles/media';

export default styled.div`
  flex: 1 0 auto;
  // background: antiquewhite;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }

  ${media.desktop`
    text-align: center;
  `};
`;