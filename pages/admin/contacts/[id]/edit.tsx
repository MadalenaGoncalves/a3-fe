import { NextPage } from 'next';

import get from '../../../../api/get';
import { TResponse, TResponseError } from '../../../../api/types';
import { API_PATH_ONE_CONTACT } from '../../../../api/constants';
import Contact from '../../../../models/contact';

import ContactForm from '../../../../components/page__admin/ContactForm';

interface Props {
  data: Contact,
  error?: TResponseError
}

const AdminEditContactPage: NextPage<TResponse> = (props) => {
  return (
    <ContactForm {...props} />
  );
}

AdminEditContactPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  
  try {
    const response = await get(API_PATH_ONE_CONTACT, { id });
    const data = response.data[0];

    const initialProps: Props = {
      data: new Contact(data)
    }

    return initialProps;

  } catch (err) {
    return err;
  }
};

export default AdminEditContactPage;
