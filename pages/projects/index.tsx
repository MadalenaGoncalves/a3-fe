import { NextPage } from 'next';

import get from '../../api/get';
import { ServerResponse, ResponseData, ProjectMinimal } from '../../models/response';
import { API_PROJECT_ALL } from '../../api/constants';

import ErrorHandler from '../../components/ErrorHandler';
import Projects from '../../components/page__projects/Projects';

const ProjectsPage: NextPage<ServerResponse> = (props) => {
  const renderHandler = (response: ResponseData) => {
    return (
      <Projects projects={response.data as ProjectMinimal[]} />
    );
  }

  return (
    <ErrorHandler response={props} render={renderHandler} />
  );
}

//[ 'err', 'req', 'res', 'pathname', 'query', 'asPath' ]
ProjectsPage.getInitialProps = async () => {
  let response: ServerResponse;
  try {
    response = await get(API_PROJECT_ALL);
  } catch (err) {
    response = err;
  }
  return response;
};

export default ProjectsPage;
