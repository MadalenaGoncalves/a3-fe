import styled from 'styled-components';
import { section__vertical_spacing } from '../../styles/styleguide/spacing';
import { font__projectOtherProjects } from '../../styles/styleguide/typography';

export const AllProjectsLink = styled.div`
  ${section__vertical_spacing};
  text-align: center;

  a {
    ${font__projectOtherProjects};
    color: currentColor;
    text-decoration: none;
    position: relative;
    padding-left: 1rem;
    &:hover {
      text-decoration: underline;
    }

    &:before {
      content: "<";
      position: absolute;
      top: -1px;
      left: 0;
    }
  }
`;