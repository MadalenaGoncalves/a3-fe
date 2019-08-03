import Link from 'next/link';

const navStyles: any = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', border: '1px solid black' };

// check again Next.js, why do I need the title on the anchor?
const Menu = () => (
  <nav id="main-nav" aria-label="Main menu"  style={navStyles}>
    <Link href='/'><a title='Home'>Home</a></Link>
    <Link href='/projects'><a title='Projects'>Projects</a></Link>
    <Link href='/contacts'><a title='Contacts'>Contacts</a></Link>
    <Link href='/auth'><a title='Login'>Login</a></Link>
    <Link href='/cms'><a title='Admin'>Admin</a></Link>
  </nav>
);

export default Menu;
