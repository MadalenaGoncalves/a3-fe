import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';

import { TResponseData } from '../../../api/types';
import { API_PATH_PROJECTS } from '../../../api/constants';
import patch from '../../../api/patch';

import useForm from '../../../hooks/useForm';

import { TApiImage } from '../../../models/serverTypes';

// import FileInput from '../form/FileInput';
import TextInput from '../../form/TextInput';

import ProjectContent from '../../page__project/ProjectContent';

import AdminPageLayout from '../AdminPageLayout';
import Form from '../Form';
import TabPanel from '../TabPanel';
import ImageListItem from './ImageListItem';
import { LightP, TabContent, TabContentFlex } from './styles';

const ProjectForm = (props: TResponseData) => {
  // const onUploadHandler = () => {};
  
  const onSubmit = (values: any) => {
    // VALIDATE
    patch(API_PATH_PROJECTS, values);
  }

  const onCancel = () => {}

  const { inputs, onChangeHandler, onSubmitHandler, onCancelHandler } = useForm(props.data, onSubmit, onCancel);

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <AdminPageLayout>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        onChange={handleChange}
      >
        <Tab label="Details" />
        <Tab label="Photos" />
        <Tab label="Designs" />
        <Tab label="Preview" />
      </Tabs>

      <Divider />
      
      <TabPanel value={value} index={0}>
        <TabContentFlex>
          <Form onCancel={onCancelHandler} onSubmit={onSubmitHandler}>
            <TextInput id="title" value={inputs.title} onChange={onChangeHandler} required multiline />
            <TextInput id="description" value={inputs.description} onChange={onChangeHandler} multiline />
            <TextInput id="address" label="street" value={inputs.address} onChange={onChangeHandler} />
            <TextInput id="postcode" value={inputs.postcode} onChange={onChangeHandler} />
            <TextInput id="city" value={inputs.city} onChange={onChangeHandler} />
            
            {/* <TextInput id="category" value={inputs.category} onChange={onChangeHandler} /> */}
            <TextInput id="gross_area" label="Gross Area" value={inputs.gross_area} onChange={onChangeHandler} />
            <TextInput id="floor_area" label="Floor Area" value={inputs.floor_area} onChange={onChangeHandler} />
            <TextInput id="client" value={inputs.client} onChange={onChangeHandler} />
            <TextInput id="start_year" label="Start year" value={inputs.start_year} onChange={onChangeHandler} />
            <TextInput id="end_year" label="End year" value={inputs.end_year} onChange={onChangeHandler} />
            <TextInput id="phases" value={inputs.phases} onChange={onChangeHandler} />
          </Form>
        </TabContentFlex>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TabContent>
          {inputs.photos ? (
            <Form onCancel={onCancelHandler} onSubmit={onSubmitHandler}>
              <List>
                {inputs.photos.map((item: TApiImage) => <ImageListItem key={item.id} image={item} />)}
              </List>
            </Form>
          ) : (
            <LightP>No photos yet...</LightP>
          )}
        </TabContent>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <TabContent>
          {inputs.images ? (
            <Form onCancel={onCancelHandler} onSubmit={onSubmitHandler}>
              <List>
                {inputs.images.map((item: TApiImage) => <ImageListItem key={item.id} image={item} />)}
              </List>
            </Form>
          ) : (
            <LightP>No designs yet...</LightP>
          )}
        </TabContent>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <ProjectContent {...props} />
      </TabPanel>
    </AdminPageLayout>
  );
}
// withError
export default ProjectForm;
