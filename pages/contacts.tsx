import { NextPage } from 'next';

import get from '../api/get';
import { Response } from '../api/types';
import { PATH_CONTACTS } from '../api/constants';

import ContactsLayout from '../components/pages/Contacts';

const ContactsPage: NextPage<Response> = (props) => {
  return <ContactsLayout {...props} />;
}

ContactsPage.getInitialProps = async () => {
  let response: Response;
  try {
    response = await get(PATH_CONTACTS);
  } catch (err) {
    response = err;
  }
  return response;
};

export default ContactsPage;