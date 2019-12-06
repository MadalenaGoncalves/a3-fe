import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';

import { TResponseData } from '../../api/types';
import Project from '../../models/project';

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
        <TableHead>
          <TableRow>
            <TableCell size="small"></TableCell>
            <TableCell align="left" className={classes.titleCol}>Title</TableCell>
            <TableCell  size="small" align="center">Enabled</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((item: Project) => {
            return (
              <TableRow key={item.id}>
                <TableCell size="small">
                  <Thumbnail src="/static/images/samples/P1110470.JPG" />
                </TableCell>
                <TableCell align="left" className={classes.titleCol}>{item.title}</TableCell>
                <TableCell size="small" align="center">
                  <CheckIcon />
                </TableCell>
                <TableCell align="center">
                  <Button startIcon={<EditIcon />}>
                    <Link href={`/admin/projects/${item.id}/edit`}><a>Edit</a></Link>
                  </Button>
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

const Thumbnail  = styled.img`
  height: 70px;
  width: auto;
  vertical-align: middle;
`;
