import { NextPage } from 'next';

import Head from 'next/head'
import Menu from './Menu';
import FooterMenu from './FooterMenu';

interface HomepageProps {
  children: any,
  title?: string,
};

const defaultTitle = 'A3 ARCHITEKTEN BERLIN-DÜSSELDORF'
const PageLayout: NextPage<HomepageProps> = ({ children, title }) => {
  if (title) {
    title = `${title} - ${defaultTitle}`;
  } else {
    title = defaultTitle;
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <header>
        <a href="#main-content" id="skip-to-main-content">Jump to main content</a>
        <span>LOGO</span>
        <span>Hamburger button</span>
        <Menu />
      </header>
      
      <main id="main-content">
        {children}
      </main>

      <footer>
        <FooterMenu />
      </footer>
    </div>
  );
}

export default PageLayout;