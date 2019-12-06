import * as React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import { TResponseData } from '../../api/types';
// import Contact from '../../models/contact';

import useForm from '../../hooks/useForm';

import FileInput from '../form/FileInput';
import TextInput from '../form/TextInput';

import AdminPageLayout from './AdminPageLayout';
import Form from './Form';

import { API_PATH_ONE_CONTACT } from '../../api/constants';
import patch from '../../api/patch';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 130,
    height: 130,
  },
});

const ContactsForm = (props: TResponseData) => {
  const classes = useStyles();
  
  const onUploadHandler = () => {};
  
  const onSubmit = (values: any) => {
    // VALIDATE
    patch(API_PATH_ONE_CONTACT, values);
  }

  const onCancel = () => {}

  const { inputs, onChangeHandler, onSubmitHandler, onCancelHandler } = useForm(props.data, onSubmit, onCancel);
  
  return (
    <AdminPageLayout>
      <MainContentWrapper>
        <FormSection>
          <Form onCancel={onCancelHandler} onSubmit={onSubmitHandler}>
            <TextInput id="name" value={inputs.name} onChange={onChangeHandler} required />
            <TextInput id="address" label="street" value={inputs.address} onChange={onChangeHandler} />
            <TextInput id="postcode" value={inputs.postcode} onChange={onChangeHandler} />
            <TextInput id="city" value={inputs.city} onChange={onChangeHandler} />
            <TextInput id="email" value={inputs.email} onChange={onChangeHandler} />
            <TextInput id="phone" value={inputs.phone} onChange={onChangeHandler} />
            <TextInput id="fax" value={inputs.fax} onChange={onChangeHandler} />
            <TextInput id="url" value={inputs.url} onChange={onChangeHandler} />
          </Form>
        </FormSection>

        <AvatarSection>
          <Avatar alt={inputs.name} src="/static/images/icon_user_placeholder.svg" className={classes.avatar} />
          <FileInput id="upload" type="file" onClick={onUploadHandler} accept="image/png, image/jpeg" />
        </AvatarSection>
      </MainContentWrapper>
    </AdminPageLayout>
  );
}

// withError
export default ContactsForm;

const MainContentWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  padding: 2rem 1.5rem;
`;

const FormSection = styled.div`
  flex: 1;

  form > div {
    margin-bottom: 2rem;
    display: flex;
  }
  
  .MuiFormControl-root {
    margin-right: 1rem;
  }

  label {
    text-transform: uppercase;
  }
`;

const AvatarSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
