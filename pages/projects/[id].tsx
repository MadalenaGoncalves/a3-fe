import { NextPage } from 'next';

import get from '../../api/get';
import { ResponseError } from '../../api/types';
import { PATH_PROJECT } from '../../api/constants';
import ProjectLayout from '../../components/page__project/Project';
import Project from '../../models/project';

interface Props {
  data: Project,
  error?: ResponseError
}

const ProjectPage: NextPage<Props> = (props) => {
  return <ProjectLayout project={props.data} {...props.error} />;
}

ProjectPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  
  try {
    const response = await get(PATH_PROJECT, { id });
    const data = response.data[0];

    const initialProps: Props = {
      // data: Object.assign({}, data as Project)
      data: new Project(data)
    }

    // console.log('initialProps', initialProps);
    return initialProps;

  } catch (err) {
    const initialProps: Props = {
      data: new Project({}),
      error: err
    }
    return initialProps;
  }
};

export default ProjectPage;
