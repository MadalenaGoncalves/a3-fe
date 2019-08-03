import { ResponseError } from '../api/types';

import PageLayout from './PageLayout';


const ErrorMessage = (error: ResponseError) => {
  return (
    <PageLayout title="Error">
      <h1>Something went wrong...</h1>
      <p>{error.message}</p>
    </PageLayout>
  );
}

export default ErrorMessage;