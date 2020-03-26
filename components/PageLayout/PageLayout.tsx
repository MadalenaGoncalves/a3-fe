import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import Link from 'next/link';

import Menu from '../../containers/Menu';
import MenuTogglerButton from '../../containers/MenuToggler';
import { Header, HeaderContent, JumpToMainLink, MainContainer, FooterLinks, MobileFooter } from './styles';
import { StyledLink } from '../StyledLink';

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
        <HeaderContent>
          <JumpToMainLink href="#main-content" id="skip-to-main-content">Jump to main content</JumpToMainLink>
          <Link href="/projects" passHref>
            <a><img src="/static/images/logo_transparency.png" /></a>
          </Link>
          <Menu />
          <MenuTogglerButton />
          
          <FooterLinks>
            <div>
              <Link href='/a3projekte' passHref>
                <StyledLink>A3 Projekte</StyledLink>
              </Link>
            </div>
            <div>
              <Link href='/impressum' passHref>
                <StyledLink>Impressum</StyledLink>
              </Link>
            </div>
            <div>
              <Link href='/datenschutz' passHref>
                <StyledLink>Datenschutz</StyledLink>
              </Link>
            </div>
          </FooterLinks>
        </HeaderContent>
      </Header>
      
      <MainContainer>
        <main id="main-content">
          {children}

          <MobileFooter>
            <Link href='/a3projekte' passHref><a>A3 Projekte</a></Link>
            <Link href='/impressum' passHref><a>Impressum</a></Link>
            <Link href='/datenschutz' passHref><a>Datenschutz</a></Link>
          </MobileFooter>
        </main>
      </MainContainer>
    </>
  );
}

export default PageLayout;