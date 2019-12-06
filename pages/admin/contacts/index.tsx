import { NextPage } from 'next';

import get from '../../../api/get';
import { TResponse } from '../../../api/types';
import { API_PATH_CONTACTS } from '../../../api/constants';

import List from '../../../components/page__admin/ContactsList';

const AdminContactListPage: NextPage<TResponse> = (props) => {
  return (
    <List {...props} />
  );
}

AdminContactListPage.getInitialProps = async () => {
  let response: TResponse;
  try {
    response = await get(API_PATH_CONTACTS);
  } catch (err) {
    response = err;
  }
  return response;
};

export default AdminContactListPage;