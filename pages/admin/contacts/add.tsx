import { NextPage } from 'next';

import Contact from '../../../models/contact';

import ContactForm from '../../../components/admin/ContactsForm';

const AdminAddContactPage: NextPage<Contact> = (contact) => {
  return (
    <ContactForm add contact={contact} />
  );
}

export default AdminAddContactPage;

AdminAddContactPage.getInitialProps = async () => {
  return new Contact();
};