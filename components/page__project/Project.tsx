import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { getImageUrl } from '../../api/utils';
import withErrorHander from '../../hocs/withErrorHander';
import CProject from '../../models/project';
import { TApiImage } from '../../models/serverTypes';

import PageLayout, { PageSection } from '../PageLayout';

import { section__vertical_spacing } from '../../styles/styleguide/spacing';
import { font__projectOtherProjects } from '../../styles/styleguide/typography';

import MetaItem from './MetaItem';
import HR from './styles/HR';


interface IProps {
  data: CProject,
}

export const ProjectContent = (props: IProps) => {
  const project = props.data;

  const renderAddress = () => (
    <>
      {project.addressLine1}
      {project.addressLine1 && project.addressLine2 && ', '}
      {project.addressLine2}
    </>
   );

  return (
    <>
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
    </>
  );
}

const Project = ({ data }: IProps) => (
  <PageLayout title={data.title}>
    <ProjectContent data={data} />

    <AllProjectsLink>
      <Link href='/projects' passHref>
        <a title={data.title}>Andere Projekte</a>
      </Link>
      </AllProjectsLink>
  </PageLayout>
);

export default withErrorHander(Project);

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