import * as React from 'react';
import Link from 'next/link';

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { TResponseData } from '../../api/types';
import { getThumbnailUrl } from '../../api/utils';
import Contact from '../../models/contact';

import AdminPageLayout from './AdminPageLayout';
import IconButton from './IconButton';
import PLight from './PLight';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    mainCol: {
      width: '100%',
    },
  }),
);

const ContactsList = (props: TResponseData) => {
  const classes = useStyles();
  const data = props.data;
  return (
    <AdminPageLayout>
      {!data && <PLight>No contacts yet...</PLight>}
      {data &&
        <Table summary="List of contacts">
        <TableBody>
          {!data && <PLight>No contacts yet...</PLight>}
          {data && data.map((item: Contact) => {
            const name = item.name || "";
            return (
              <TableRow key={item.id}>
                <TableCell size="small" align="center">
                {item.photo
                  ? <Avatar className={classes.avatar} alt={name} src={getThumbnailUrl(item.photo)} />
                  : <AccountCircleOutlinedIcon className={classes.avatar} color="disabled" />
                }
                </TableCell>

                <TableCell align="left" className={classes.mainCol}>
                  {item.name}<br />
                  {item.department}<br />
                  {item.phone}<br />
                  <span>{item.address}, {item.postcode} {item.city}</span>
                </TableCell>

                <TableCell align="center">
                  <Link href={`/admin/contacts/${item.id}/edit`} passHref>
                    <a><IconButton edit ariaLabel={name} /></a>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link href={`/admin/contacts/${item.id}/delete`} passHref>
                    <a><IconButton delete ariaLabel={name} /></a>
                  </Link>
                </TableCell>
              </TableRow>
              );
            })}
        </TableBody>
      </Table>
      }
    </AdminPageLayout>
  );
}

export default ContactsList;

