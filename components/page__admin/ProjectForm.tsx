import * as React from 'react';
import styled from 'styled-components';

import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { TResponseData } from '../../api/types';

import useForm from '../../hooks/useForm';

// import FileInput from '../form/FileInput';
import TextInput from '../form/TextInput';

import AdminPageLayout from './AdminPageLayout';
import Form from './Form';
import TabPanel from './TabPanel';

import { API_PATH_PROJECTS } from '../../api/constants';
import patch from '../../api/patch';


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
        <Tab label="Images" />
      </Tabs>

      <Divider />
      
      <TabPanel value={value} index={0}>
        <ContentWrapper>
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
        </ContentWrapper>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ContentWrapper>images here</ContentWrapper>
      </TabPanel>
      
    </AdminPageLayout>
  );
}
// withError
export default ProjectForm;


const ContentWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  padding: 2rem 1.5rem;

  form {
    flex: 1;
  }
  form > div {
    margin-bottom: 2rem;
    display: flex;
  }
  label {
    text-transform: uppercase;
  }
`;
