import { NextPage } from 'next';

import get from '../../api/get';
import { TResponseError } from '../../api/types';
import { API_PATH_ONE_PROJECT } from '../../api/constants';
import ProjectLayout from '../../components/page__project/Project';
import Project from '../../models/project';

interface Props {
  data: Project,
  error?: TResponseError
}

const ProjectPage: NextPage<Props> = (props) => <ProjectLayout {...props} />

ProjectPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  
  try {
    const response = await get(API_PATH_ONE_PROJECT, { id });
    const data = response.data[0];

    const initialProps: Props = {
      data: new Project(data)
    }

    return initialProps;

  } catch (err) {
    const initialProps: Props = {
      data: new Project(),
      error: err
    }
    return initialProps;
  }
};

export default ProjectPage;
