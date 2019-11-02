import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { font__menuLink } from './styleguide/typography';

export type TMainMenuItem = { title: string, uri: string };


type MenuNavProps = {
  visible: boolean
}

const menuItems = [
  { title: 'Home', uri: '/' },
  { title: 'Projects', uri: '/projects' },
  { title: 'Contacts', uri: '/contacts' },
  // { title: 'Login', uri: '/auth' },
  // { title: 'Admin', uri: '/cms' },
];

interface Props {
  isOpen: boolean
}
// check again Next.js, why do I need the title on the anchor?
export const Menu: React.SFC<Props> = ({ isOpen }) => (
  <MenuNav id="main-nav" aria-label="Main menu" visible={isOpen}>
    <MenuNav__List role="menubar" aria-label="Main menu">
      {menuItems.map((item) => (
        <li key={item.title} role="none">
          <Link href={item.uri}>
            <a title={item.title} role="menuitem">
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
  height: 100vh;
  width: ${(props: any) => props.visible ? '100%' : '0'};
  @media (min-width: 667px) {
    width: ${(props: any) => props.visible ? 'auto' : '0'};
  }

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
`;

const MenuNav__List = styled.ul`
  padding: 0 2.5rem;
  li {
    list-style: none;
    text-align: right;
    position: relative;
    a {
      ${font__menuLink};
      color: ${props => props.theme.colors.white};

      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 0%;
        height: 3px;
        // top: 43%;
        top: 50%;
        // margin-top: -0.5px;
        background: #fff;
      }
      
      &:before {
        left: -2.5px;
      }
      &:after {
        right: 2.5px;
        background: #fff;
        transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
      }
      
      &:hover{
        &:before {
          background: #fff;
          width: 100%;
          transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        &:after {
          background: transparent;
          width: 100%;
          transition: 0s;
        }
      }
    }
  }
`;
