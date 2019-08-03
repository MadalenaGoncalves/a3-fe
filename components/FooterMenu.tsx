import Link from 'next/link';

const navStyles: any = { display: 'flex', flexDirection: 'row', borderTop: '1px solid black' };
const menuStyles: any = { display: 'flex', flexDirection: 'column', marginRight: '1rem' };

// check again Next.js, why do I need the title on the anchor?
const FooterMenu = () => (
  <nav id="main-nav" aria-label="Footer menu"  style={navStyles}>
    <div style={menuStyles}>
      <Link href='/'><a title='Home'>Home</a></Link>
      <Link href='/projects'><a title='Projects'>Projects</a></Link>
    </div>

    <div style={menuStyles}>
      <Link href='/contacts'><a title='Contacts'>Contacts</a></Link>
      <Link href='/impressum'><a title='Impressum'>Impressum</a></Link>
      <Link href='/datenschutz'><a title='Datenschutz'>Datenschutz</a></Link>
    </div>
  </nav>
);

export default FooterMenu;
