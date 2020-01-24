import { ResponseError } from '../../models/response';
import PageLayout from './PageLayout';

export default (error: ResponseError) => {
  return (
    <PageLayout title="Error">
      <h1>Something went wrong...</h1>
      <p>{error.message}</p>
    </PageLayout>
  );
}
