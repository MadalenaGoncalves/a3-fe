import * as React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

const TextInput: React.ComponentType<TextFieldProps> = ({ id, label, ...props}) => (
  <TextField id={id} label={label || id} name={id} {...props} />
);

export default TextInput;