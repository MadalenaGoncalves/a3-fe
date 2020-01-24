import { NextPage } from 'next';

import get from '../../../../api/get';
import { API_PROJECT_ONE } from '../../../../api/constants';
import { ServerResponse, ResponseData, Project } from '../../../../models/response';

import ErrorHandler from '../../../../components/ErrorHandler';
import ProjectForm from '../../../../components/admin/ProjectForm';

const AdminEditProjectPage: NextPage<ServerResponse> = (props) => {
  return (
    <ErrorHandler
      render={(data: ResponseData) => (<ProjectForm {...data as Project} />)}
      response={props}
    />
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
