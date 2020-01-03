import { Component } from 'react';
import { TResponseData, TResponseError } from '../api/types';
import ErrorPage from '../components/PageLayout/ErrorPage';

// https://codeburst.io/react-higher-order-components-in-typescript-made-simple-6f9b55691af1
// InjectedProps are props the HOC injects into the WrappedComponent
// PageProps (or OriginalProps) are passed by the HOC caller directly to the WrappedComponent, through the HOC.
//   The HOC doesn't know anything about these
// ExternalProps are those passed to the HOC but not to the WrappedComponent

// https://www.typescriptlang.org/docs/handbook/generics.html
// ex. of a generic function: function withErrorHandler<T>
// extends object is just syntatic sugar about T


// Props the HOC creates and adds to the wrapped component
export interface InjectedProps {
}
// Props you want the HOC component to receive (besides the props of the wrapped component)
interface ExternalProps {
  error?: TResponseError
}

// bellow syntax means:
// -- withErrorHandler<T> : makes this a generic function of type T
// -- withErrorHandler(Page: ComponentType<OriginalProps & InjectedProps>)
function withErrorHandler<OriginalProps extends object> (
  Page: React.ComponentType<TResponseData & InjectedProps> 
  | React.StatelessComponent<TResponseData & InjectedProps>
) {
  type HOCProps = OriginalProps & ExternalProps;
  return class extends Component<HOCProps> {
    render() {
      const { error, ...rest } = this.props;
      if (error) {
        return <ErrorPage {...error as TResponseError} />;
      }
      return <Page {...rest } />
    }
  }
}

export default withErrorHandler;
