import { NextPage } from 'next';
import Link from 'next/link';

const Homepage: NextPage<null> = () => (
  <div>
    <h1>
      <Link href="/projects">
        <a>A3 Architekten Berlin-Düsseldorf GmbH</a>
      </Link>
    </h1>
    <h1>
      <Link href="/a3projekte">
        <a>A3 PROJEKTE GmbH</a>
      </Link>
    </h1>
  </div>
);

export default Homepage;