import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import Link from 'next/link';

import { Header, HeaderContent, JumpToMainLink, SimplePage, MainContainer } from './styles';

interface HomepageProps {
  children: any,
  title?: string,
};

const defaultTitle = 'A3 PROJEKTE'
const A3ProjektePage: NextPage<HomepageProps> = ({ children, title }) => {
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
          <Link href="/" passHref>
            <a><img src="/static/images/a3projekte-logo.jpg" /></a>
          </Link>
        </HeaderContent>
      </Header>
      
      <MainContainer>
        <main id="main-content">
          <SimplePage projekte>
            {children}
          </SimplePage>
        </main>
      </MainContainer>
    </>
  );
}

export default A3ProjektePage;