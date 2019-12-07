import { NextPage } from 'next';

import { TResponse, TResponseError } from '../../../api/types';
import ContactForm from '../../../components/page__admin/ContactForm';
import Contact from '../../../models/contact';

const AdminAddContactPage: NextPage<TResponse> = (props) => {
  return (
    <ContactForm add {...props} />
  );
}

export default AdminAddContactPage;

interface Props {
  data: Contact,
  error?: TResponseError
}

AdminAddContactPage.getInitialProps = async () => {
  const initialProps: Props = {
    data: new Contact()
  }

  return initialProps;
};