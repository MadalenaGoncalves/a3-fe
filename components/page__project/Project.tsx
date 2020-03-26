import * as React from 'react';
import Link from 'next/link';

// import { ProjectData } from '../../models/response';
import { Project } from '../../models/types';
import PageLayout from '../PageLayout';
import { StyledBackLink } from '../StyledLink';

import ProjectContent from './ProjectContent';
import { AllProjectsLink } from './styles';

export default (props: Project) => {
  return (
    <PageLayout title={props.title}>
      <ProjectContent {...props} />

      <AllProjectsLink>
        <Link href='/projects' passHref>
          <StyledBackLink>Andere Projekte</StyledBackLink>
        </Link>
      </AllProjectsLink>
    </PageLayout>
  );
}
