import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router';
// import { useRouter } from 'next/router';
import styled from 'styled-components';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Drawer from '@material-ui/core/Drawer';
// import Icon from '@material-ui/core/Icon';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

// import Menu from '../Menu';

interface HomepageProps {
  children: any,
  title?: string,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#283593',
    },
    secondary: {
      main: '#fdd835',
    },
  },
});

// const useStyles = makeStyles((theme: Theme) => createStyles({
const useStyles = makeStyles({
  headerButton: {
    color: '#fff',
  },
  drawerPaper: {
    position: 'relative',
    height: 'auto',
    overflowX: 'hidden',
    width: '170px',
    backgroundColor: 'transparent',
    marginTop: '0.5em',
    borderRight: 'none',
  },
});

const defaultTitle = 'ADMIN - A3 ARCHITEKTEN BERLIN-DÜSSELDORF '
const AdminPageLayout: NextPage<HomepageProps> = ({ children, title }) => {


  Router.events.on('routeChangeStart', url => {
    console.log('Navigating to:', url);
  });
  
  Router.events.on('routeChangeComplete', url => {
    console.log('Completed navigation to: ', url);
  });


  const classes = useStyles();
  // const router = useRouter();
  // const { pathname } = router;
  // console.log(pathname);

  const projectsBaseUrl = "/admin/projects";
  const contactsBaseUrl = "/admin/contacts";

  if (title) {
    title = `${title} - ${defaultTitle}`;
  } else {
    title = defaultTitle;
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <AppBar position="fixed">
        <Toolbar>
          <img src="/static/images/logo_transparency.png" />
          <span style={{ flex: 1 }}></span>
          <Button startIcon={<PlaylistAddIcon />} className={classes.headerButton}>
            <Link href={`${projectsBaseUrl}/add`} passHref><HeaderLink>Add project</HeaderLink></Link>
          </Button>

          <Button startIcon={<PersonAddIcon />} className={classes.headerButton}>
            <Link href={`${contactsBaseUrl}/add`} passHref><HeaderLink>Add contact</HeaderLink></Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Main>
        <Drawer
          open
          variant="permanent"
          elevation={0}
          PaperProps={{
                className: classes.drawerPaper,
            }}
        >
          <Link href={`${projectsBaseUrl}`} passHref>
            <MenuItem component="a">
              <ApartmentIcon fontSize="small" />
              Projects
            </MenuItem>
          </Link>
          <Link href={`${contactsBaseUrl}`} passHref>
            <MenuItem component="a">
              <PersonIcon fontSize="small" />
              Contacts
            </MenuItem>
          </Link>
          <Link href="/logout" passHref>
            <MenuItem component="a">
            <LogoutIcon fontSize="small" />
              Logout
            </MenuItem>
          </Link>
        </Drawer>

        <Content>
          <Card>
            {children}
          </Card>
        </Content>
      </Main>
    </ThemeProvider>
  );
}

export default AdminPageLayout;

const Main = styled.main`
  margin-top: 1rem;
  display: flex;
  flex-grow: 1;
`;

const Content = styled.div`
  flex-grow: 1;
  padding-right: 1rem;
  margin-bottom: 1rem;
`;

const HeaderLink = styled.a`
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;