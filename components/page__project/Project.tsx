import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { getImageUrl } from '../../api/utils';
import withErrorHander from '../../hocs/withErrorHander';
import CProject from '../../models/project';

import PageLayout from '../PageLayout';
import PageSection from '../PageSection';

import MetaItem from './MetaItem';

// import HeroH1 from './styles/HeroH1';
// import HeroImageSection from './styles/HeroImageSection';
import HR from './styles/HR';
// import MetaSection from './styles/MetaSection';

import { section__vertical_spacing } from '../../styles/styleguide/spacing';
import { TApiImage } from '../../models/serverTypes';


interface IProps {
  data: CProject,
}

const Project = ({ data }: IProps) => {
  const project = data;

  const renderAddress = () => (
    <React.Fragment>
      {project.addressLine1}
      {project.addressLine1 && project.addressLine2 && ', '}
      {project.addressLine2}
    </React.Fragment>
   );

   return (
    <PageLayout title={project.title}>
      {/* <HeroImageSection img="/static/images/P1110470.JPG">
        <HeroH1>{project.title}</HeroH1>
      </HeroImageSection> */}
      
      <PageSection>
        <Header>{project.title}</Header>

        {project.mainPhoto &&
          <MainImage src={getImageUrl(project.mainPhoto)} alt={project.title} />}
        <p>{project.description}</p>
        <p><br /></p>

        <MetaItem title="Fertigstellung" value={project.date} />
        <MetaItem title="Wohnfläche" value="ca. 200 m2" />
        <MetaItem title="Phasen" value="HOAI Leistungsphasen 1-4" />
        <MetaItem title="Adresse" value={renderAddress()} />
        <MetaItem title="Bauherr" value={project.client} />
        <p><br /></p>
      </PageSection>

      {project.photos &&
        <PhotoGallery>
          {project.photos.map((img: TApiImage) => (
            <Photo key={img.id}>
              <figure>
                <img src={getImageUrl(img)} alt="" />
              </figure>
            </Photo>
          ))}
        </PhotoGallery>
      }
      {project.photos && <HR />}

      {project.images &&
        <DesignGallery>
          {project.images.map((img: TApiImage) => (
            <figure key={img.id}>
              <img src={getImageUrl(img)} alt="" />
            </figure>
          ))}
        </DesignGallery>
      }

      <AllProjectsLink>
        <Link href='/projects' passHref>
          <a title={project.title}>Andere Projekte</a>
        </Link>
      </AllProjectsLink>
    </PageLayout>
  );
}

export default withErrorHander(Project);

// ################################################################
// ################################################################

const Header = styled.h1`
  margin-left: auto;
  margin-right: auto;
  font-weight: 200;
`;

const MainImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

const PhotoGallery = styled(PageSection)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
const Photo = styled.div`
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

const DesignGallery = styled(PageSection)`
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

const AllProjectsLink = styled.div`
  ${section__vertical_spacing};
  text-align: center;
  a {
    text-decoration: none;
    display: inline-block;
    padding: 1.1rem 1.3rem;
    border-radius: 40px;
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    opacity: 1;

    &:hover {
      opacity: .8;
    }
  }
`;