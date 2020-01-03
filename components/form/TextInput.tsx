import * as React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { StyledTextField } from './styles';


const TextInput: React.ComponentType<TextFieldProps> = ({ id, label, ...props}) => {
  return (
    <StyledTextField
      id={id}
      label={label || id}
      name={id}
      {...props}
    />
  );
}

export default TextInput;