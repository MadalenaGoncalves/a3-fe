import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { font__menuLink } from '../styles/styleguide/typography';
import media from '../styles/media';

export type TMainMenuItem = { title: string, uri: string };


type MenuNavProps = {
  visible: boolean
}

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

// STYLES
// height: ${(props: any) => props.visible ? '85vh' : '0'};
const MenuNav = styled.nav<MenuNavProps>`
  background-color: black;
  overflow: hidden;
  height: 100%;
  max-height: 100vh;
  width: ${(props: any) => props.visible ? '100%' : '0'};

  position: fixed;
  top: 0;
  right: 0;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  p {
    color: white;
    text-align: right;
    padding: 1rem 2.5rem;
    font-size: 0.7rem;
  }

  ${media.tablet`
    background: none;
    display: block;
    position: relative;

    width: auto
    height: auto;
    max-height: 100%;

    margin-top: 1.5rem;
    padding-left: 1rem;
  `};
`;

const MenuNav__List = styled.ul`
  padding: 0 2.5rem;

  li {
    list-style: none;
    text-align: right;
    position: relative;
  }

  a {
    ${font__menuLink};
    color: currentColor;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ${media.tablet`
    padding: 0;

    li {
      text-align: left;
    }
    a {
      font-size: 1.1rem;
    }
  `};
`;
