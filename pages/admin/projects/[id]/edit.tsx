import { NextPage } from 'next';

import get from '../../../../api/get';
import { ServerResponse, ResponseData, Project as ResponseProject } from '../../../../models/response';
import { API_PROJECT_ONE } from '../../../../api/constants';

import ErrorHandler from '../../../../components/ErrorHandler';
import ProjectForm from '../../../../components/admin/ProjectForm';
import Project from '../../../../models/project';

const AdminEditProjectPage: NextPage<ServerResponse> = (props) => {
  const renderHandler = (response: ResponseData) => {
    const project = new Project(response.data as ResponseProject)
    return (<ProjectForm project={project} />);
  }

  return (
    <ErrorHandler response={props} render={renderHandler} />
  );
}

AdminEditProjectPage.getInitialProps = async ({ query }) => {
  let response: ServerResponse;
  try {
    response = await get(API_PROJECT_ONE, { id: query.id });
  } catch (err) {
    response = err;
  }
  return response;
};

export default AdminEditProjectPage;
