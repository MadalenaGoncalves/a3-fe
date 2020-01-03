import * as React from 'react';
import Link from 'next/link';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import PanoramaIcon from '@material-ui/icons/Panorama';


import { TResponseData } from '../../api/types';
import { getMainImageUrl } from '../../api/utils';
import { TApiProjectMinimal } from '../../models/serverTypes';

import IconButton from './IconButton';
import PLight from './PLight';
import AdminPageLayout from './AdminPageLayout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photo: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
    fallback: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    mainCol: {
      width: '100%',
    },
  }),
);

const ProjectsList = (props: TResponseData) => {
  const classes = useStyles();
  const data = props.data;

  return (
    <AdminPageLayout>
      <Table summary="List of projects">
        <TableBody>
          {!data && <PLight>No projects yet...</PLight>}
          {data && data.map((item: TApiProjectMinimal) => {
            return (
              <TableRow key={item.id}>
                <TableCell size="small" align="center">
                  {item.imageId
                    ? <Avatar className={classes.photo} variant="rounded" src={getMainImageUrl(item.filename, item.fileformat)} />
                    : <PanoramaIcon className={classes.fallback} color="disabled" />
                  }
                </TableCell>
                <TableCell align="left" className={classes.mainCol}>{item.title}</TableCell>
                <TableCell align="center">
                  <Link href={`/admin/projects/${item.id}/edit`} passHref>
                    <a><IconButton edit ariaLabel={item.title} /></a>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link href={`/admin/projects/${item.id}/delete`} passHref>
                    <a><IconButton delete ariaLabel={item.title} /></a>
                  </Link>
                </TableCell>
              </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </AdminPageLayout>
  );
}

export default ProjectsList;
