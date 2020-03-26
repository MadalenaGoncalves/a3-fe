// import { Response, ResponseData, ResponseError, isError } from '../models/response';
// import ErrorPage from '../components/PageLayout/ErrorPage';

// type Props = {
//   response: Response,
//   render(data: ResponseData): JSX.Element,
// };

// const ErrorHandler = (props: Props) => {
//   if (isError(props.response)) {
//     return <ErrorPage {...props.response as ResponseError} />;
//   }

//   return props.render(props.response as ResponseData);
// }

const ErrorHandler = () => {
  return null;
}

export default ErrorHandler;
