import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Edit';
import PanoramaIcon from '@material-ui/icons/Panorama';


import { TResponseData } from '../../api/types';
import { getMainImageUrl } from '../../api/utils';
import { TApiProjectMinimal } from '../../models/serverTypes';

import AdminPageLayout from './AdminPageLayout';

const useStyles = makeStyles({
  titleCol: {
    width: '100%',
  },
});

const ProjectsList = (props: TResponseData) => {
  const classes = useStyles();
  const data = props.data;

  return (
    <AdminPageLayout>
      <Table>
        <TableBody>
          {data && data.map((item: TApiProjectMinimal) => {
            return (
              <TableRow key={item.id}>
                <TableCell size="small">
                  {item.imageId
                    ? <Thumbnail src={getMainImageUrl(item.filename, item.fileformat)} />
                    : <PanoramaIcon color="disabled" />
                  }
                </TableCell>
                <TableCell align="left" className={classes.titleCol}>{item.title}</TableCell>
                <TableCell align="center">
                  <Link href={`/admin/projects/${item.id}/edit`} passHref>
                    <a><Button startIcon={<EditIcon />}>Edit</Button></a>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link href={`/admin/projects/${item.id}/edit`} passHref>
                    <a><Button startIcon={<DeleteIcon />}>Delete</Button></a>
                  </Link>
                </TableCell>
              </TableRow>
              );
            })}
            {!data && <span>No projects yet...</span>}
        </TableBody>
      </Table>
    </AdminPageLayout>
  );
}

export default ProjectsList;

const Thumbnail  = styled.img`
  height: 70px;
  width: auto;
  vertical-align: middle;
`;
