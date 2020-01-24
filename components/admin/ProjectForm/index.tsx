import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Tabs from '@material-ui/core/Tabs';

import { Image } from '../../../models/response';
import Project from '../../../models/project';
import { API_PROJECT_ONE } from '../../../api/constants';
import patch from '../../../api/patch';

import useForm from '../../../hooks/useForm';

// import FileInput from '../form/FileInput';
import TextInput from '../../form/TextInput';

import ProjectContent from '../../page__project/ProjectContent';

import AdminPageLayout from '../AdminPageLayout';
import Form from '../Form';
import PLight from '../PLight';
import TabPanel from '../TabPanel';
import ImageListItem from './ImageListItem';
import { TabContent, TabContentFlex } from './styles';

type Props = {
  add?: boolean,
  project: Project
}

const ProjectForm = (props: Props) => {
  // const onUploadHandler = () => {};
  
  const onSubmit = (values: any) => {
    // VALIDATE
    patch(API_PROJECT_ONE, values);
  }

  const onCancel = () => {}

  const { inputs, onChangeHandler, onSubmitHandler, onCancelHandler } = useForm(props.project, onSubmit, onCancel);

  const [value, setValue] = React.useState(1);
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
              <Table summary="List of photos" size="small">
                <TableBody>
                  {inputs.photos.map((item: Image) => <ImageListItem key={item.id} image={item} />)}
                </TableBody>
              </Table>
            </Form>
          ) : (
            <PLight>No photos yet...</PLight>
          )}
        </TabContent>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <TabContent>
          {inputs.images ? (
            <Form onCancel={onCancelHandler} onSubmit={onSubmitHandler}>
              <Table summary="List of designs" size="small">
                <TableBody>
                  {inputs.images.map((item: Image) => <ImageListItem key={item.id} image={item} />)}
                </TableBody>
              </Table>
            </Form>
          ) : (
            <PLight>No designs yet...</PLight>
          )}
        </TabContent>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <ProjectContent {...new Project(inputs)} />
      </TabPanel>
    </AdminPageLayout>
  );
}
// withError
export default ProjectForm;
