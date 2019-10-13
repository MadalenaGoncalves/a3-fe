import Link from 'next/link';

const navStyles: any = { display: 'flex', flexDirection: 'row', borderTop: '1px solid black' };
const menuStyles: any = { display: 'flex', flexDirection: 'column', marginRight: '1rem' };

// check again Next.js, why do I need the title on the anchor?
const FooterMenu = () => (
  <nav id="footer-nav" aria-label="Footer menu"  style={navStyles}>
    <ul style={menuStyles}>
      <li><Link href='/'><a title='Home'>Home</a></Link></li>
      <li><Link href='/projects'><a title='Projects'>Projects</a></Link></li>
    </ul>

    <ul style={menuStyles}>
      <li><Link href='/contacts'><a title='Contacts'>Contacts</a></Link></li>
      <li><Link href='/impressum'><a title='Impressum'>Impressum</a></Link></li>
      <li><Link href='/datenschutz'><a title='Datenschutz'>Datenschutz</a></Link></li>
    </ul>
  </nav>
);

export default FooterMenu;
