import styled from 'styled-components';
import { page_layout__margin } from '../../../styles/styleguide/spacing';
import { PageSection } from '../../PageLayout';

export const Header = styled.h1`
  margin-left: auto;
  margin-right: auto;
  font-weight: 200;
`;

export const HR = styled.hr`
  ${page_layout__margin};
  margin-top: 0;
  margin-bottom: 0;
  border: 0;
  border-top: 2px dotted ${props => props.theme.colors.lightgray};
`;

export const MainImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

export const PhotoGallery = styled(PageSection)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
export const Photo = styled.div`
  background-color: ${props => props.theme.colors.lightgray};
  figure {
    margin: 0;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const DesignGallery = styled(PageSection)`
figure {
  margin: 2.5rem 0;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
img {
    display: block;
    margin: 0 auto;
    margin-top: 2.5rem;
    &:first-child {
      margin-top: 0;
    }

    max-width: 100%;
    height: auto;
    // max-height: 100vh;
  }
`;
