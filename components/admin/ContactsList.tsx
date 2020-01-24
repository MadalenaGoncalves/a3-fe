import * as React from 'react';
import Link from 'next/link';

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { getThumbnailUrl } from '../../api/utils';
import { Contact } from '../../models/response';

import AdminPageLayout from './AdminPageLayout';
import DeleteIconButtonDialog from './DeleteIconButtonDialog';
import EditIconButton from './IconButton';
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

type Props = {
  contacts: Contact[]
}
const ContactsList = (props: Props) => {
  const classes = useStyles();
  const { contacts } = props;
  return (
    <AdminPageLayout>
      {!contacts && <PLight>No contacts yet...</PLight>}
      {contacts &&
        <Table summary="List of contacts" size="small">
          <TableBody>
            {contacts.map((item: Contact) => {
              const name = item.name || "";
              return (
                <TableRow key={item.id}>
                  <TableCell align="center">
                    <IconButton color="primary" aria-label="drag">
                      <DragIndicatorIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell align="center">
                  {item.relations && item.relations.photo
                    ? <Avatar className={classes.avatar} alt={name} src={getThumbnailUrl(item.relations.photo)} />
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
                      <a><EditIconButton edit ariaLabel={name} /></a>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIconButtonDialog
                      itemDescription={name}
                      actionUrl={`/admin/contacts/${item.id}/delete`}
                    />
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

