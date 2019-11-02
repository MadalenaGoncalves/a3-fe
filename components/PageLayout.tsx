import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'

import Menu from '../containers/Menu';
import MenuTogglerButton from '../containers/MenuToggler';

import Footer from './Footer';
import FooterMenu from './FooterMenu';
import Header from './PageHeader';
import JumpToMainLink from './JumpToMainLink';

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
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header>
        <JumpToMainLink href="#main-content" id="skip-to-main-content">Jump to main content</JumpToMainLink>
        <img src="/static/images/logo_transparency.png" />
        <Menu />
        <MenuTogglerButton />
      </Header>
      
      <main id="main-content">
        {children}
      </main>

      <Footer>
        <FooterMenu />
      </Footer>
    </React.Fragment>
  );
}

export default PageLayout;