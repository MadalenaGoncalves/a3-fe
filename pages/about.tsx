import { NextPage } from 'next';

import { query, GET_ABOUT } from '../api';
import { Response, isData, AboutData } from '../models/response';

import PageLayout from '../components/PageLayout';
import { SimplePage } from '../components/PageLayout/styles';

const About: NextPage<Response> = (props) => {
  if (isData(props)) {
    const { about } = props.data as AboutData;
    return (
      <PageLayout title="Über uns">
        <SimplePage>
          <h1>{about.title}</h1>
          {about.content && <div dangerouslySetInnerHTML={{ __html: about.content }} />}
        </SimplePage>
      </PageLayout>
    );
  } else {
    return <div>TODO: handle error</div>
  }
}

About.getInitialProps = async () => {
  try {
    let response: Response;
    response = await query(GET_ABOUT);
    return response;
  } catch (err) {
    console.log("ERRO", err);
    return err;
  }
};

export default About;
