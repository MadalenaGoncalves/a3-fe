import * as React from 'react';

import { getImageUrl } from '../../../api/utils';
import { TApiImage } from '../../../models/serverTypes';

import { PageSection } from '../../PageLayout';
import { Header, HR, MainImage, PhotoGallery, Photo, DesignGallery } from './styles';
import MetaItem from '../MetaItem';
import { IProps } from '../Project';

const ProjectContent = (props: IProps) => {
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

export default ProjectContent;
