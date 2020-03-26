import { NextPage } from 'next';

import { query, GET_ARCHIVE } from '../api';
import { Response, isData, ArchiveData } from '../models/response';

import PageLayout from '../components/PageLayout';
import { SimplePage } from '../components/PageLayout/styles';

const Archive: NextPage<Response> = (props) => {
  if (isData(props)) {
    const { archive } = props.data as ArchiveData;
    return (
      <PageLayout title="Archiv">
        <SimplePage>
          <h1>{archive.title}</h1>
          {archive.content && <div dangerouslySetInnerHTML={{ __html: archive.content }} />}
        </SimplePage>
      </PageLayout>
    );
  } else {
    return <div>TODO: handle error</div>
  }
}


Archive.getInitialProps = async () => {
  try {
    let response: Response;
    response = await query(GET_ARCHIVE);
    return response;
  } catch (err) {
    console.log("ERRO", err);
    return err;
  }
};

export default Archive;
