import * as React from 'react';
import { NextPage } from 'next';
import Button from '@material-ui/core/Button';
import { FormToolbar } from './styles';

interface Props {
  children: any,
  onCancel: () => void,
  // onSubmit: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  onSubmit: (event: any) => void,
};


const Form: NextPage<Props> = ({ children, onCancel, onSubmit }) => {
  return (
    <form>
      {children}

      <FormToolbar>
        <Button type="submit" variant="contained" color="primary" onClick={onSubmit}>Save</Button>
        <Button type="button" variant="outlined" color="primary" onClick={onCancel}>Cancel</Button>
      </FormToolbar>
    </form>
  );
}

export default Form;
