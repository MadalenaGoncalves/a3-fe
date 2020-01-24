import { NextPage } from 'next';

import get from '../../../../api/get';
import { ServerResponse, ResponseData, Contact as ResponseContact } from '../../../../models/response';
import Contact from '../../../../models/contact';
import { API_CONTACT_ONE } from '../../../../api/constants';

import ErrorHandler from '../../../../components/ErrorHandler';
import ContactForm from '../../../../components/admin/ContactsForm';

const AdminEditContactPage: NextPage<ServerResponse> = (props) => {
  const renderHandler = (response: ResponseData) => {
    const contact = new Contact(response.data as ResponseContact)
    return (<ContactForm contact={contact} />);
  }

  return (
    <ErrorHandler response={props} render={renderHandler} />
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
