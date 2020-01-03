import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

interface IProps {
  ariaLabel: string,
  edit?: boolean,
  delete?: boolean,
}

export default (props: IProps) => {
  let ariaLabel ;
  if (props.edit)
    ariaLabel = 'Edit';
  if (props.delete)
    ariaLabel = 'Delete';

  return (
    <IconButton color="primary" aria-label={`${ariaLabel} ${props.ariaLabel}`}>
      {props.edit && <EditIcon />}
      {props.delete && <DeleteIcon />}
    </IconButton>
  );
};