import { NextPage } from 'next';

import get from '../../../../api/get';
import { ServerResponse, ResponseData, Contact } from '../../../../models/response';
import { API_CONTACT_ONE } from '../../../../api/constants';

import ErrorHandler from '../../../../components/ErrorHandler';
import ContactForm from '../../../../components/admin/ContactsForm';

const AdminEditContactPage: NextPage<ServerResponse> = (props) => {
  return (
    <ErrorHandler
      render={(data: ResponseData) => (<ContactForm {...data as Contact} />)}
      response={props}
    />
  );
}

AdminEditContactPage.getInitialProps = async ({ query }) => {
  let response: ServerResponse;
  try {
    response = await get(API_CONTACT_ONE, { id: query.id });
  } catch (err) {
    response = err;
  }
  return response;
};

export default AdminEditContactPage;
