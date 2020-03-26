import { Contact } from '../../models/types';
import { ContactsData } from '../../models/response';

import PageLayout from '../../components/PageLayout';
import { SimplePage } from '../../components/PageLayout/styles';
import { ContactItem } from './styles';

const Contacts = (props: ContactsData) => {
  return (
    <PageLayout title="Über uns und Kontakte">
      <SimplePage>
        <h1>Kontakte</h1>
        
        {props.contacts && props.contacts.map((contact: Contact) => (
          <ContactItem key={contact.id}>
            <h2>
              {contact.name}
              {contact.name2 && (
                <>
                  <br />
                  {contact.name2}
                </>
              )}
            </h2>
            <p>
              {contact.address} <br />
              {contact.postcode} {contact.city}
            </p>
            <p>
              Tel.: {contact.phone} <br />
              Fax.: {contact.fax}
            </p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </ContactItem>
        ))}
      </SimplePage>
    </PageLayout>
  );
}

export default Contacts;
