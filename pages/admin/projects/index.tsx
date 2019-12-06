import { NextPage } from 'next';

import get from '../../../api/get';
import { TResponse } from '../../../api/types';
import { API_PATH_PROJECTS } from '../../../api/constants';

import List from '../../../components/page__admin/ProjectsList';

const AdminProjectsListPage: NextPage<TResponse> = (props) => {
  return (
    <List {...props} />
  );
}

AdminProjectsListPage.getInitialProps = async () => {
  let response: TResponse;
  try {
    response = await get(API_PATH_PROJECTS);
  } catch (err) {
    response = err;
  }
  return response;
};

export default AdminProjectsListPage;
