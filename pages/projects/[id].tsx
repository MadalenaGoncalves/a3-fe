import { NextPage } from 'next';

import get from '../../api/get';
import { ServerResponse, ResponseData, Project as ResponseProject } from '../../models/response';
import { API_PROJECT_ONE } from '../../api/constants';

import ErrorHandler from '../../components/ErrorHandler';
import Project from '../../components/page__project/Project';


const ProjectPage: NextPage<ServerResponse> = (props) => {
  const renderHandler = (response: ResponseData) => {
    return (
      <Project project={response.data as ResponseProject} />
    );
  }
  return (
    <ErrorHandler response={props} render={renderHandler} />
  );
}

ProjectPage.getInitialProps = async ({ query }) => {
  let response: ServerResponse;
  try {
    response = await get(API_PROJECT_ONE, { id: query.id });
  } catch (err) {
    response = err;
  }
  return response;
};

export default ProjectPage;
