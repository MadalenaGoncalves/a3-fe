import * as React from 'react';
import Link from 'next/link';
import { MenuNav, MenuNav__List } from './styles';

const menuItems = [
  { title: 'Projects', uri: '/projects' },
  { title: 'Contacts', uri: '/contacts' },
  // { title: 'Login', uri: '/auth' },
  // { title: 'Admin', uri: '/cms' },
];

interface Props {
  isOpen: boolean,
  onClose: () => {},
}
// check again Next.js, why do I need the title on the anchor?
export const Menu: React.SFC<Props> = ({ isOpen, onClose }) => (
  <MenuNav id="main-nav" aria-label="Main menu" visible={isOpen}>
    <MenuNav__List role="menubar" aria-label="Main menu">
      {menuItems.map((item) => (
        <li key={item.title} role="none">
          <Link href={item.uri} passHref>
            <a title={item.title} role="menuitem" onClick={onClose}>
              {item.title}
            </a>
          </Link>
        </li>
      ))}
    </MenuNav__List>
  </MenuNav>
);
export default Menu;
//<p>© All rights reserved to A3-Architekten</p>
