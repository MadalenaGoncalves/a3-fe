import { NextPage } from 'next';

import get from '../../api/get';
import { Response } from '../../api/types';
import { PATH_PROJECT } from '../../api/constants';

import ProjectLayout from '../../components/pages/Project';

const ProjectPage: NextPage<Response> = (props) => {
  return <ProjectLayout {...props} />;
}

ProjectPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  let response: Response;
  try {
    response = await get(PATH_PROJECT, { id });
  } catch (err) {
    response = err;
  }
  return response;
};

export default ProjectPage;

