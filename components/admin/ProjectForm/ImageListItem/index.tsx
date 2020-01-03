import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { getMainImageUrl } from '../../../../api/utils';
import { TApiImage } from '../../../../models/serverTypes';
import useForm from '../../../../hooks/useForm';
import TextInput from '../../../form/TextInput';

import DeleteIconButtonDialog from '../../DeleteIconButtonDialog';
import PLight from '../../PLight';

const useStyles = makeStyles({
  row: {
    verticalAlign: 'top',
  },
  photo: {
    width: '250px',
    height: 'auto',
  },
  mainCol: {
    width: '100%',
  },
});

export default (props: any) => {
  const classes = useStyles();

  const image: TApiImage = props.image;
  const onSubmit = () => {}
  const onCancel = () => {}
  const { inputs, onChangeHandler } = useForm(image, onSubmit, onCancel);

  return (
    <TableRow className={classes.row}>
      <TableCell align="center">
        <IconButton color="primary" aria-label="drag">
          <DragIndicatorIcon />
        </IconButton>
      </TableCell>

      <TableCell align="center">
        <Avatar variant="square" className={classes.photo} src={getMainImageUrl(image.filename, image.fileformat)} />
      </TableCell>

      <TableCell align="left" className={classes.mainCol}>
        <div>
          <PLight>File: {image.filename}.{image.fileformat}</PLight>
          <TextInput id="image.id" label="caption" value={inputs.caption || ""} onChange={onChangeHandler} />
        </div>
      </TableCell>

      <TableCell align="center">
        <DeleteIconButtonDialog
          itemDescription={`${image.filename}.${image.fileformat}`}
          actionUrl={`/admin/image/${image.id}/delete`}
        />
      </TableCell>
    </TableRow>
  );
};
