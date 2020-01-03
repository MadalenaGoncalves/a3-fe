import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components'

import { Theme, ThemeProvider as MuiThemeProvider, makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';

import AddIcon from '@material-ui/icons/Add';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';

import defaultTheme from '../../../styles/theme';
import muiTheme from '../../../styles/muiTheme';
import { Content, Main } from './styles';

interface HomepageProps {
  children: any,
  title?: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  drawerPaper: {
    position: 'relative',
    height: 'auto',
    overflowX: 'hidden',
    width: '170px',
    backgroundColor: 'transparent',
    marginRight: '0.5em',
    borderRight: 'none',
  },
  menuLvl1: {
    paddingLeft: theme.spacing(2),
  },
  menuLvl2: {
    paddingLeft: theme.spacing(4),
  },
  menuIcon: {
    marginRight: theme.spacing(2),
  }
}));

const AdminPageLayout: NextPage<HomepageProps> = ({ children, title }) => {
  const classes = useStyles();

  Router.events.on('routeChangeStart', url => {
    console.log('Navigating to:', url);
  });
  
  Router.events.on('routeChangeComplete', url => {
    console.log('Completed navigation to: ', url);
  });

  const router = useRouter();
  const projectId = router.query && router.query.id;
  const showSubRoutes = !!projectId || router.pathname.endsWith("add")

  const projectsBaseUrl = "/admin/projects";
  const contactsBaseUrl = "/admin/contacts";

  const defaultTitle = 'ADMIN - A3 ARCHITEKTEN BERLIN-DÜSSELDORF '
  if (title) {
    title = `${title} - ${defaultTitle}`;
  } else {
    title = defaultTitle;
  }

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <AppBar position="fixed">
          <Toolbar>
            <img src="/static/images/logo_transparency.png" />
            <span style={{ flex: 1 }}></span>
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
              <MenuItem component="a" className={classes.menuLvl1}>
                <ApartmentIcon fontSize="small" className={classes.menuIcon} />
                Projects
              </MenuItem>
            </Link>
            <Link href={`${projectsBaseUrl}/add`} passHref>
              <MenuItem component="a" className={classes.menuLvl2}>
                <AddIcon fontSize="small" className={classes.menuIcon} />
                Add project
              </MenuItem>
            </Link>
            {showSubRoutes &&
              <Link href={`${projectsBaseUrl}/${projectId}/photos/add`} passHref>
                <MenuItem component="a" className={classes.menuLvl2}>
                  <AddIcon fontSize="small" className={classes.menuIcon} />
                  Add photos
                </MenuItem>
              </Link>
            }
            {showSubRoutes &&
              <Link href={`${projectsBaseUrl}/${projectId}/designs/add`} passHref>
                <MenuItem component="a" className={classes.menuLvl2}>
                  <AddIcon fontSize="small" className={classes.menuIcon} />
                  Add designs
                </MenuItem>
              </Link>
            }

            <Divider variant="middle" />

            <Link href={`${contactsBaseUrl}`} passHref>
              <MenuItem component="a" className={classes.menuLvl1}>
                <PersonIcon fontSize="small" className={classes.menuIcon} />
                Contacts
              </MenuItem>
            </Link>
            <Link href={`${contactsBaseUrl}/add`} passHref>
              <MenuItem component="a" className={classes.menuLvl2}>
                <AddIcon fontSize="small" className={classes.menuIcon} />
                Add contact
              </MenuItem>
            </Link>

            <Divider variant="middle" />
            
            <Link href="/logout" passHref>
              <MenuItem component="a" className={classes.menuLvl1}>
              <LogoutIcon fontSize="small" className={classes.menuIcon} />
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
    </MuiThemeProvider>
  );
}

export default AdminPageLayout;
