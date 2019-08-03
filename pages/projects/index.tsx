import { NextPage } from 'next';

import get from '../../api/get';
import { Response } from '../../api/types';
import { PATH_PROJECT } from '../../api/constants';

import ProjectsLayout from '../../components/pages/Projects';


const ProjectsPage: NextPage<Response> = (props) => {
  return <ProjectsLayout {...props} />;
}

//[ 'err', 'req', 'res', 'pathname', 'query', 'asPath' ]
ProjectsPage.getInitialProps = async () => {
  let response: Response;
  try {
    response = await get(PATH_PROJECT);
  } catch (err) {
    response = err;
  }
  return response;
};

export default ProjectsPage;
