import { NextPage } from 'next';
import Link from 'next/link';

import { query, GET_A3PROJEKTE } from '../../api';
import { Response, isData, A3ProjekteData } from '../../models/response';

import { A3ProjektePage } from '../../components/PageLayout';

const HausverwaltungPage: NextPage<Response> = (props) => {
  if (isData(props)) {
    const { a3Projekte } = props.data as A3ProjekteData;
    return (
      <A3ProjektePage>
        <h1>A3 PROJEKTE GMBH</h1>
        <h2>{a3Projekte.title}</h2>
        {a3Projekte.content &&
          <div dangerouslySetInnerHTML={{ __html: a3Projekte.content }} />}
        <p>
          <br />
          <br />
          <Link href="/a3projekte/datenschutz" passHref>
            <a title="Datenschutzerklärung">DATENSCHUTZ</a>
          </Link>
        </p>
      </A3ProjektePage>
    );
  } else {
    return <div>TODO: handle error</div>
  }
}

HausverwaltungPage.getInitialProps = async () => {
  try {
    let response: Response;
    response = await query(GET_A3PROJEKTE);
    return response;
  } catch (err) {
    console.log("ERRO", err);
    return err;
  }
};

export default HausverwaltungPage;
