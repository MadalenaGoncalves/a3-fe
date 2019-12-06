import { NextPage } from 'next';

import { TResponse } from '../../../api/types';
import ContactForm from '../../../components/page__admin/ContactForm';

const AdminAddContactPage: NextPage<TResponse> = (props) => {
  return (
    <ContactForm add {...props} />
  );
}

export default AdminAddContactPage;
