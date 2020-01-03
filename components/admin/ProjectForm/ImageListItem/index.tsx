import * as React from 'react';

// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

import { getMainImageUrl } from '../../../../api/utils';
import { TApiImage } from '../../../../models/serverTypes';
import useForm from '../../../../hooks/useForm';
import TextInput from '../../../form/TextInput';

import { Content, Img, ItemToolbar, ListItem } from './styles';

export default (props: any) => {
  const image: TApiImage = props.image;
  const onSubmit = () => {}
  const onCancel = () => {}
  const { inputs, onChangeHandler } = useForm(image, onSubmit, onCancel);

  return (
    <ListItem>
      <ItemToolbar>
        <IconButton color="primary" aria-label="drag"><DragIndicatorIcon /></IconButton>
      </ItemToolbar>
      <Content>
        <ListItemAvatar>
          <Img src={getMainImageUrl(image.filename, image.fileformat)} />
        </ListItemAvatar>
        <TextInput id="image.id" label="caption" value={inputs.caption || ""} onChange={onChangeHandler} />
      </Content>
      <IconButton color="primary" aria-label="delete"><DeleteIcon /></IconButton>
    </ListItem>
    // <TextInput id="caption" label="caption" value={inputs.caption} onChange={onChangeHandler} />

    // <GridListTile>
    //   <img src={getMainImageUrl(image.filename, image.fileformat)} />
    //   <GridListTileBar
    //     title={image.caption}
    //     actionIcon={
    //       <IconButton aria-label="delete" className={classes.icon}>
    //         <DeleteIcon />
    //       </IconButton>
    //     }
    //   />
    // </GridListTile>
  );
};
