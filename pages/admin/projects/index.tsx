import { NextPage } from 'next';

import get from '../../../api/get';
import { ServerResponse, ResponseData, ProjectMinimal } from '../../../models/response';
import { API_PROJECT_ALL } from '../../../api/constants';

import ErrorHandler from '../../../components/ErrorHandler';
import List from '../../../components/admin/ProjectsList';

const AdminProjectsListPage: NextPage<ServerResponse> = (props) => {
  return (
    <ErrorHandler
      render={(data: ResponseData) => (<List {...data as ProjectMinimal[]} />)}
      response={props}
    />
  );
}

AdminProjectsListPage.getInitialProps = async () => {
  let response: ServerResponse;
  try {
    response = await get(API_PROJECT_ALL);
  } catch (err) {
    response = err;
  }
  return response;
};

export default AdminProjectsListPage;
