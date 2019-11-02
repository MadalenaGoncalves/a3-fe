import { NextPage } from 'next';

import get from '../api/get';
import { TResponse } from '../api/types';
import { PATH_CONTACTS } from '../api/constants';

import ContactsLayout from '../components/page__contacts/Contacts';

const ContactsPage: NextPage<TResponse> = (props) => {
  return <ContactsLayout {...props} />;
}

ContactsPage.getInitialProps = async () => {
  let response: TResponse;
  try {
    response = await get(PATH_CONTACTS);
  } catch (err) {
    response = err;
  }
  return response;
};

export default ContactsPage;