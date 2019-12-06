import { NextPage } from 'next';

import get from '../../api/get';
import { TResponse } from '../../api/types';
import { API_PATH_PROJECTS } from '../../api/constants';

import ProjectsLayout from '../../components/page__projects/Projects';


const ProjectsPage: NextPage<TResponse> = (props) => {
  return <ProjectsLayout {...props} />;
}

//[ 'err', 'req', 'res', 'pathname', 'query', 'asPath' ]
ProjectsPage.getInitialProps = async () => {
  let response: any;
  try {
    response = await get(API_PATH_PROJECTS);
  } catch (err) {
    response = err;
  }
  return response;
};

export default ProjectsPage;
