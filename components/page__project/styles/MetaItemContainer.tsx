import styled from 'styled-components';
import media from '../../../styles/media';

export default styled.div`
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