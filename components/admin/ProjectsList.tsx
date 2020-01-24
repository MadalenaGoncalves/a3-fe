import * as React from 'react';
import Link from 'next/link';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import IconButton from '@material-ui/core/IconButton';
import PanoramaIcon from '@material-ui/icons/Panorama';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { getMainImageUrl } from '../../api/utils';
import { ProjectMinimal } from '../../models/response';

import AdminPageLayout from './AdminPageLayout';
import DeleteIconButtonDialog from './DeleteIconButtonDialog';
import EditIconButton from './IconButton';
import PLight from './PLight';

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

type Props = {
  projects: ProjectMinimal[]
}

const ProjectsList = (props: Props) => {
  const { projects } = props;
  const classes = useStyles();

  return (
    <AdminPageLayout>
      {/* this doesnt really work does it? */}
      {!projects && <PLight>No projects yet...</PLight>}

      {projects &&
        <Table summary="List of projects" size="small">
          <TableBody>
            {projects.map((item: ProjectMinimal) => {
              return (
                <TableRow key={item.id}>
                  <TableCell align="center">
                    <IconButton color="primary" aria-label="drag">
                      <DragIndicatorIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell align="center">
                    {item.imageId
                      ? <Avatar className={classes.photo} variant="rounded" src={getMainImageUrl(item.filename, item.fileformat)} />
                      : <PanoramaIcon className={classes.fallback} color="disabled" />
                    }
                  </TableCell>
                  <TableCell align="left" className={classes.mainCol}>{item.title}</TableCell>
                  <TableCell align="center">
                    <Link href={`/admin/projects/${item.id}/edit`} passHref>
                      <a><EditIconButton edit ariaLabel={item.title} /></a>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIconButtonDialog
                      itemDescription={item.title}
                      actionUrl={`/admin/projects/${item.id}/delete`}
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

export default ProjectsList;
