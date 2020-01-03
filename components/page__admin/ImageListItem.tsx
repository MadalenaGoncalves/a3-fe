import * as React from 'react';
import styled from 'styled-components';

// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

import { getMainImageUrl } from '../../api/utils';
import { TApiImage } from '../../models/serverTypes';
import useForm from '../../hooks/useForm';
import TextInput from '../form/TextInput';


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

const ListItem = styled.li`
  margin: 0 -1.5rem;
  // background: rgba(0,0,0,.04);
  border-bottom: 1px solid rgba(0,0,0,0.1);
  &:last-child {
    border-bottom: none;
  }

  display: flex;
  flex-flow: row no-wrap;
  align-items: flex-start;
  justify-Wrapper: flex-start;
`;

const ItemToolbar = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

const Content = styled.div`
  display: flex;
  // border-left: 1px solid rgba(0,0,0,0.1);
  padding: 1rem;

  > * {
    margin-right: 1rem;
  }
`;

const Img = styled.img`
  width: 250px;
  height: auto;
`;