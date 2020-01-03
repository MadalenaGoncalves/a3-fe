import * as React from 'react';
import Link from 'next/link';

import withErrorHander from '../../hocs/withErrorHander';
import CProject from '../../models/project';

import PageLayout from '../PageLayout';
import ProjectContent from './ProjectContent';
import { AllProjectsLink } from './styles';

export interface IProps {
  data: CProject,
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
