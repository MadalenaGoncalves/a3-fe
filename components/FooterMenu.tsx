import * as React from 'react';
import Link from 'next/link';
import FooterNav from './FooterNav';

// check again Next.js, why do I need the title on the anchor?
const FooterMenu = () => (
  <FooterNav id="footer-nav" aria-label="Footer menu">
    <ul>
      <li><Link href='/'><a title='Home'>Home</a></Link></li>
      <li><Link href='/projects'><a title='Projects'>Projects</a></Link></li>
    </ul>

    <ul>
      <li><Link href='/contacts'><a title='Contacts'>Contacts</a></Link></li>
      <li><Link href='/impressum'><a title='Impressum'>Impressum</a></Link></li>
      <li><Link href='/datenschutz'><a title='Datenschutz'>Datenschutz</a></Link></li>
    </ul>
  </FooterNav>
);

export default FooterMenu;
