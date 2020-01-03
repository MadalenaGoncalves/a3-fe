import * as React from 'react';
import { FileInputWrapper } from './styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement> | null;

const FileInput: React.FunctionComponent<InputProps> = (props) => (
  <FileInputWrapper>
    <input type="file" {...props} />
  </FileInputWrapper>
);

export default FileInput;
