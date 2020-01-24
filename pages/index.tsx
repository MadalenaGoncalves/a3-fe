import { NextPage } from 'next';
import Link from 'next/link';

const Homepage: NextPage<null> = () => (
  <div>
    <h1>
      <Link href="/projects" passHref>
        <a>A3 Architekten Berlin-Düsseldorf GmbH</a>
      </Link>
    </h1>
    <h2>
      <Link href="/a3projekte" passHref>
        <a>A3 PROJEKTE GmbH</a>
      </Link>
    </h2>
  </div>
);

export default Homepage;