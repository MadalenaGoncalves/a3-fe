import * as React from 'react';
import Link from 'next/link';

import { TResponseData } from '../../../api/types';
import Contact from '../../../models/contact';

import AdminPageLayout from '../AdminPageLayout';
import { List, ListItem, Thumbnail, Toolbar, SmallIcon } from './styles';

const ContactsList = (props: TResponseData) => {
  const data = props.data;

  return (
    <AdminPageLayout>
      <List>
        {data && data.map((item: Contact) => {
          return (
            <ListItem key={item.id}>
              <Thumbnail src="/static/images/icon_user_placeholder.svg" />
              <div>
                {item.name}<br />
                {item.department}<br />
                {item.phone}<br />
                <span>{item.address}, {item.postcode} {item.city}</span>
              </div>

              <Toolbar>
                <Link href={`/admin/contacts/${item.id}/edit`} passHref>
                  <a><SmallIcon src="/static/images/icon_pencil.svg" alt="edit" /></a>
                </Link>
                <Link href={`/admin/projects/${item.id}/delete`} passHref>
                  <a><SmallIcon src="/static/images/icon_bin.svg" alt="delete" /></a>
                </Link>
              </Toolbar>
            </ListItem>
          );
        })}
      </List>
    </AdminPageLayout>
  );
}

export default ContactsList;

