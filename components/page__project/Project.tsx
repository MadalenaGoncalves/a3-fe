import * as React from 'react';
import Link from 'next/link';

import { Project as ResponseProject } from '../../models/response';
import Project from '../../models/project';

import PageLayout from '../PageLayout';
import ProjectContent from './ProjectContent';
import { AllProjectsLink } from './styles';

type Props = {
  project: ResponseProject
};
export default (props: Props) => {
  const project = new Project(props.project);

  return (
    <PageLayout title={project.title}>
      <ProjectContent {...project} />

      <AllProjectsLink>
        <Link href='/projects' passHref>
          <a title={project.title}>Andere Projekte</a>
        </Link>
      </AllProjectsLink>
    </PageLayout>
  );
}
