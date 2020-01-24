import { NextPage } from 'next';

import get from '../../../api/get';
import { ServerResponse, ResponseData, Contact } from '../../../models/response';
import { API_CONTACT_ALL } from '../../../api/constants';

import ErrorHandler from '../../../components/ErrorHandler';
import List from '../../../components/admin/ContactsList';

const AdminContactListPage: NextPage<ServerResponse> = (props) => {
  const renderHandler = (response: ResponseData) => {
    return (<List contacts={response.data as Contact[]} />);
  }

  return (
    <ErrorHandler response={props} render={renderHandler} />
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