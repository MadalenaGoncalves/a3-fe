import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { TResponseData } from '../../api/types';
import Contact from '../../models/contact';

import AdminPageLayout from './AdminPageLayout';
import ListItem from './ListItem';

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

const List = styled.ul`
  flex: 1 1 auto;
`;
const Thumbnail = styled.img`
  display: inline-block;
  width: 50px;
  height: auto;
  margin-right: 1.5rem;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  a {
    padding: 0 1.5rem;
    display: inline-block;
    &:last-child {
      padding-right: 0;
    }
  }
`;
const SmallIcon = styled.img`
  width: auto;
  height: 25px;
`;
