import { NextPage } from 'next';

import { query, GET_DATENSCHUTZ } from '../api';
import { Response, isData, DatenschutzData } from '../models/response';

import PageLayout from '../components/PageLayout';
import { SimplePage } from '../components/PageLayout/styles';

const PrivacyPage: NextPage<Response> = (props) => {
  if (isData(props)) {
    const { datenschutz } = props.data as DatenschutzData;
    return (
      <PageLayout title="Privacy">
        <SimplePage>
          <h1>{datenschutz.title}</h1>
          {datenschutz.content && <div dangerouslySetInnerHTML={{ __html: datenschutz.content }} />}
        </SimplePage>
      </PageLayout>
    );
  } else {
    return <div>TODO: handle error</div>
  }
}

PrivacyPage.getInitialProps = async () => {
  try {
    let response: Response;
    response = await query(GET_DATENSCHUTZ);
    return response;
  } catch (err) {
    console.log("ERRO", err);
    return err;
  }
};

export default PrivacyPage;
