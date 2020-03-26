import { NextPage } from 'next';
import Link from 'next/link';

import { query, GET_A3PROJEKTEDATENSCHUTZ } from '../../api';
import { Response, isData, A3ProjekteDatenschutzData } from '../../models/response';

import { A3ProjektePage } from '../../components/PageLayout';

const A3ProjekteDatenschutz: NextPage<Response> = (props) => {
  if (isData(props)) {
    const { a3ProjekteDatenschutz } = props.data as A3ProjekteDatenschutzData;
    return (
      <A3ProjektePage title="Privacy">
      <h1>{a3ProjekteDatenschutz.title}</h1>
      {a3ProjekteDatenschutz.content && 
        <div dangerouslySetInnerHTML={{ __html: a3ProjekteDatenschutz.content }} />}

      <p>
        <br />
        <br />
        <Link href="/a3projekte" passHref>
          <a>{'<'} Zurück zur A3 Projekte</a>
        </Link>
      </p>
    </A3ProjektePage>
    );
  } else {
    return <div>TODO: handle error</div>
  }
}

A3ProjekteDatenschutz.getInitialProps = async () => {
  try {
    let response: Response;
    response = await query(GET_A3PROJEKTEDATENSCHUTZ);
    return response;
  } catch (err) {
    console.log("ERRO", err);
    return err;
  }
};

export default A3ProjekteDatenschutz;
