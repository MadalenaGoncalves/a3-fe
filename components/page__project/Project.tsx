import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import withErrorHander from '../../hocs/withErrorHander';
import CProject from '../../models/project';

import PageLayout from '../PageLayout';
import PageSection from '../PageSection';

import MetaItem from './MetaItem';

import HeroH1 from './styles/HeroH1';
import HeroImageSection from './styles/HeroImageSection';
import HR from './styles/HR';
import MetaSection from './styles/MetaSection';

import { section__vertical_spacing } from '../styleguide/spacing';


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
      <HeroImageSection img="/static/images/gerr_ALLO-20_500.jpg">
        <HeroH1>{project.title}</HeroH1>
      </HeroImageSection>

      <MetaSection>
        <MetaItem title="Fertigstellung" value={project.date} />
        <MetaItem title="Wohnfläche" value="ca. 200 m2" />
        <MetaItem title="Phases" value="HOAI Leistungsphasen 1-4" />
        <MetaItem title="Address" value={renderAddress()} />
        <MetaItem title="Bauherr" value={project.client} />
      </MetaSection>
      <HR />

      <PageSection>
        <p>{project.description}</p>
      </PageSection>
      <HR />

      <PhotoGallery>
        <Photo href='#'><figure><img src="/static/images/samples/p1.jpg" alt="" /></figure></Photo>
        <Photo href='#'><figure><img src="/static/images/samples/p2.jpg" alt="" /></figure></Photo>
        <Photo href='#'><figure><img src="/static/images/samples/p3.jpg" alt="" /></figure></Photo>
        <Photo href='#'><figure><img src="/static/images/samples/p4.jpg" alt="" /></figure></Photo>
        <Photo href='#'><figure><img src="/static/images/samples/p5.jpg" alt="" /></figure></Photo>
      </PhotoGallery>
      <HR />

      <DesignGallery>
        <figure><img src="/static/images/samples/a1.jpg" alt="" /></figure>
        <figure><img src="/static/images/samples/a2.jpg" alt="" /></figure>
        <figure><img src="/static/images/samples/a3.jpg" alt="" /></figure>
      </DesignGallery>

      <AllProjectsLink>
        <Link href='/projects'>
          <a title={project.title}> {'<'} Andere Projekte</a>
        </Link>
      </AllProjectsLink>
    </PageLayout>
  );
}

export default withErrorHander(Project);

// ################################################################
// ################################################################

const PhotoGallery = styled(PageSection)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
const Photo = styled.a`
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