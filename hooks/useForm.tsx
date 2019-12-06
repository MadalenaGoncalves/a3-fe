import * as React from 'react';

type TCallback = (inputs: {}) => void;

export default (initialState: any, submit: TCallback, cancel: TCallback) => {
  const [inputs, setInputs] = React.useState(initialState);
  
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputs((inputs: any) => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  
  const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event) {
      event.preventDefault();
    }

    // if (validate) {
    //   validate(inputs);
    // }

    submit(inputs);
  }

  const onCancelHandler = () => {
    cancel(inputs);
  }
  
  return {
    inputs,
    onChangeHandler,
    onSubmitHandler,
    onCancelHandler
  };
}