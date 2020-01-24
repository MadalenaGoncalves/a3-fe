import { NextPage } from 'next';

import get from '../../../api/get';
import { ServerResponse, ResponseData, Contact } from '../../../models/response';
import { API_CONTACT_ALL } from '../../../api/constants';

import ErrorHandler from '../../../components/ErrorHandler';
import List from '../../../components/admin/ContactsList';

const AdminContactListPage: NextPage<ServerResponse> = (props) => {
  return (
    <ErrorHandler
      render={(data: ResponseData) => (<List {...data as Contact[]} />)}
      response={props}
    />
  );
}

AdminContactListPage.getInitialProps = async () => {
  let response: ServerResponse;
  try {
    response = await get(API_CONTACT_ALL);
  } catch (err) {
    response = err;
  }
  return response;
};

export default AdminContactListPage;