import { TResponseData } from '../../api/types';

import PageLayout from '../../components/PageLayout';

import withErrorHander from '../../hocs/withErrorHander';

import Contact from '../../models/contact';


const entryStyle = { borderTop: '1px solid', marginBottom: '2rem' };

const Contacts = (props: TResponseData) => {
  const contacts = props.data;
  return (
    <PageLayout title="Contacts">
      <h1>Contacts</h1>
      {contacts && contacts.map((contact: Contact) => (
        <div key={contact.id} style={entryStyle}>
          {contact.name} <br />
          {contact.department} <br />
          <br />
          {contact.address} <br />
          {contact.postcode} {contact.city} <br />
          <br />
          Tel.: {contact.phone} <br />
          Fax.: {contact.fax} <br />
        </div>
      ))}
    </PageLayout>
  );
}

export default withErrorHander(Contacts);