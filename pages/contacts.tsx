import { NextPage } from 'next';

import get from '../api/get';
import { ServerResponse, ResponseData, Contact as ResponseContact } from '../models/response';
import { API_CONTACT_ALL } from '../api/constants';

import ErrorHandler from '../components/ErrorHandler';
import Contacts from '../components/page__contacts/Contacts';

const ContactsPage: NextPage<ServerResponse> = (props) => {
  const renderHandler = (response: ResponseData) => {
    return (
      <Contacts contacts={response.data as ResponseContact[]} />
    );
  }
  return (
    <ErrorHandler response={props} render={renderHandler} />
  );
}

ContactsPage.getInitialProps = async () => {
  let response: ServerResponse;
  try {
    response = await get(API_CONTACT_ALL);

  } catch (err) {
    response = err;
  }
  return response;
};

export default ContactsPage;