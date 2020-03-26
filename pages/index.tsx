import { NextPage } from 'next';
import Link from 'next/link';

import styled from 'styled-components';
import { font__homepageLinks } from '../styles/styleguide/typography';

export const HomepageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1, h2 {
    text-align: center;
  }

  a {
    ${font__homepageLinks};
    padding: 1px 2px;
  }

  h1 a {
    &:hover {
      border-bottom: 2px solid ${props => props.theme.colors.yellow};
    }
  }
  
  h2 {
    margin-bottom: 15%;
    a {
      &:hover {
        border-bottom: 2px solid ${props => props.theme.colors.projekte};
      }
    }
  }
`;

const Homepage: NextPage<null> = () => (
  <HomepageContainer>
    <h1>
      <Link href="/projects" passHref>
        <a>A3 Architekten Berlin-Düsseldorf GmbH</a>
      </Link>
    </h1>
    <h2>
      <Link href="/a3projekte" passHref>
        <a>A3 Projekte GmbH</a>
      </Link>
    </h2>
  </HomepageContainer>
);

export default Homepage;