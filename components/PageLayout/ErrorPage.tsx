import { AxiosError } from 'axios';
import PageLayout from './PageLayout';

export default (error: AxiosError<any>) => {
  return (
    <PageLayout title="Error">
      <h1>Something went wrong...</h1>
      <p>{error.message}</p>
    </PageLayout>
  );
}
