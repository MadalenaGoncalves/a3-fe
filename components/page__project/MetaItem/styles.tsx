import styled from 'styled-components';
import { font__projectMetaText, font__projectMetaTitle } from '../../../styles/styleguide/typography';

export const Meta = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0;
  border-top: 1px solid ${props => props.theme.colors.linegray};

  &:first-child {
    border: none;
  }
`;

export const MetaTitle = styled.span`
  ${font__projectMetaTitle};
  margin-right: 0.2rem;
  min-width: 200px;
`;

export const MetaText = styled.span`
  ${font__projectMetaText};
`;
