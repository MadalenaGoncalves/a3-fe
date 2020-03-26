import { NextPage } from 'next';

import { query, GET_IMPRESSUM } from '../api';
import { Response, isData, ImpressumData } from '../models/response';

import PageLayout from '../components/PageLayout';
import { SimplePage } from '../components/PageLayout/styles';


const Impressum: NextPage<Response> = (props) => {
  if (isData(props)) {
    const { impressum } = props.data as ImpressumData;
    return (
      <PageLayout title="Impressum">
        <SimplePage>
          <h1>{impressum.title}</h1>
          {impressum.content && <div dangerouslySetInnerHTML={{ __html: impressum.content }} />}
        </SimplePage>
      </PageLayout>
    );
  } else {
    return <div>TODO: handle error</div>
  }
}

Impressum.getInitialProps = async () => {
  try {
    let response: Response;
    response = await query(GET_IMPRESSUM);
    return response;
  } catch (err) {
    console.log("ERRO", err);
    return err;
  }
};

export default Impressum;