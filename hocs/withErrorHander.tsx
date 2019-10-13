import { Component } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import { Response, ResponseData, ResponseError } from '../api/types';

// https://codeburst.io/react-higher-order-components-in-typescript-made-simple-6f9b55691af1
// InjectedProps are props the HOC injects into the WrappedComponent
// PageProps (or OriginalProps) are passed by the HOC caller directly to the WrappedComponent, through the HOC.
//   The HOC doesn't know anythiing about these
// ExternalProps are those passed to the HOC but not to the WrappedComponent

// https://www.typescriptlang.org/docs/handbook/generics.html
// ex. of a generic function: function withErrorHandler<T>
// extends object is just syntatic sugar about T
function withErrorHandler<InjectedProps extends object> (
  Page: React.ComponentType<Response & InjectedProps>
) {
  // type ResultProps = Response & ExternalProps;
  return class extends Component<Response> {  // <ResultProps, State> {
    render() {      
      if (this.props.error) {
        return <ErrorMessage {...this.props.error as ResponseError} />;
      }
      return <Page {...this.props.data as ResponseData } />
    }
  }
}

export default withErrorHandler;
