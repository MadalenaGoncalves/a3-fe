import PageLayout from '../../components/PageLayout';
import { Contact } from '../../models/response';


const entryStyle = { borderTop: '1px solid', marginBottom: '2rem' };

type Props = {
  contacts: Contact[]
}
const Contacts = (props: Props) => {
  const { contacts } = props;
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

export default Contacts;