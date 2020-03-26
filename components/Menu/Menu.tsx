import * as React from 'react';
import Link from 'next/link';

import { StyledLink } from '../StyledLink';
import { MenuNav, MenuNav__List } from './styles';

interface Props {
  isOpen: boolean,
  onClose: () => {},
}
// check again Next.js, why do I need the title on the anchor?
export const Menu: React.SFC<Props> = ({ isOpen, onClose }) => {
  const menuItems = [
    { title: 'Projekte', uri: '/projects' },
    { title: 'Über uns', uri: '/about' },
    { title: 'Kontakt', uri: '/contacts' },
    { title: 'Archiv', uri: '/archive' },
    // { title: 'Login', uri: '/auth' },
    // { title: 'Admin', uri: '/cms' },
  ];

  return (
    <MenuNav id="main-nav" aria-label="Main menu" visible={isOpen}>
      <MenuNav__List role="menubar" aria-label="Main menu">
        {menuItems.map((item) => (
          <li key={item.title} role="none">
            <Link href={item.uri} passHref>
              <StyledLink title={item.title} role="menuitem" onClick={onClose}>
                {item.title}
              </StyledLink>
            </Link>
          </li>
        ))}
      </MenuNav__List>
    </MenuNav>
  );
}
export default Menu;
//<p>© All rights reserved to A3-Architekten</p>
