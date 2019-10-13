import Link from 'next/link';

const navStyles: any = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', border: '1px solid black' };

// check again Next.js, why do I need the title on the anchor?
const Menu = () => (
  <nav id="main-nav" aria-label="Main menu"  style={navStyles}>
    <ul>
      <li><Link href='/'><a title='Home'>Home</a></Link></li>
      <li><Link href='/projects'><a title='Projects'>Projects</a></Link></li>
      <li><Link href='/contacts'><a title='Contacts'>Contacts</a></Link></li>
      <li><Link href='/auth'><a title='Login'>Login</a></Link></li>
      <li><Link href='/cms'><a title='Admin'>Admin</a></Link></li>
    </ul>
  </nav>
);

export default Menu;
