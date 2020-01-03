import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import Link from 'next/link';

import Menu from '../../containers/Menu';
import MenuTogglerButton from '../../containers/MenuToggler';

import Header, { MainContainer, FooterLinks, MobileFooter } from './PageHeader';
import JumpToMainLink from '../JumpToMainLink';

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
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header>
        <JumpToMainLink href="#main-content" id="skip-to-main-content">Jump to main content</JumpToMainLink>
        <Link href="/" passHref>
            <a title="Home"><img src="/static/images/logo_transparency.png" /></a>
          </Link>
        <Menu />
        <MenuTogglerButton />
        
        <FooterLinks>
          <Link href='/impressum' passHref><a title='Impressum'>Impressum</a></Link>
          <Link href='/datenschutz' passHref><a title='Datenschutz'>Datenschutz</a></Link>
        </FooterLinks>
      </Header>
      
      <MainContainer>
        <main id="main-content">
          {children}

          <MobileFooter>
            <Link href='/impressum' passHref><a title='Impressum'>Impressum</a></Link>
            <Link href='/datenschutz' passHref><a title='Datenschutz'>Datenschutz</a></Link>
          </MobileFooter>
        </main>
      </MainContainer>
    </>
  );
}

export default PageLayout;