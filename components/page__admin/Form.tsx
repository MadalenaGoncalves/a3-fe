import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

interface Props {
  children: any,
  onCancel: () => void,
  // onSubmit: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  onSubmit: (event: any) => void,
};

const FormToolbar = styled.div`
  button {
    margin-right: 1.5rem;
  }
`;

const Form: NextPage<Props> = ({ children, onCancel, onSubmit }) => {
  return (
    <form>
      {children}

      <FormToolbar>
        <Button type="submit" variant="contained" color="primary" onClick={onSubmit}>Save</Button>
        <Button type="button" color="primary" onClick={onCancel}>Cancel</Button>
      </FormToolbar>
  </form>
  );
}

export default Form;
