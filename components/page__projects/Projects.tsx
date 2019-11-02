import Link from 'next/link';
import styled from 'styled-components';

import { TResponseData } from '../../api/types';
import withErrorHander from '../../hocs/withErrorHander';
import Project from '../../models/project';

import PageLayout from '../PageLayout';
// import PageSection from '../PageSection';

import media from '../../styles/media';
import { font__projectsTitle } from '../styleguide/typography';


// <HeroImageSection img="/static/images/gerr_ALLO-20_500.jpg"></HeroImageSection>
const Projects = (props: TResponseData) => {
  const projects = props.data;
  
  return (
    <PageLayout title="Projects">
      <div>
        <h1 style={{ textAlign: 'center' }}>Projekte</h1>
      </div>

      <GridList>
        {projects && projects.map((project: Project) => {
          return (
            <GridItem key={project.id}>
              <Link href='/projects/[id]' as={`/projects/${project.id}`}>
                <a title={project.title}>
                  <figure>
                    <img src="/static/images/samples/p1.jpg" alt="" />
                    <figcaption><h2>{project.title}</h2></figcaption>
                  </figure>
                </a>
              </Link>
            </GridItem>
          );
        })}
      </GridList>
    </PageLayout>
  );
}

export default withErrorHander(Projects);

const GridList = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  max-width: 1400px;
  
  ${media.laptopL`
    margin-left: auto;
    margin-right: auto;
  `};

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 2.5rem;
  grid-row-gap: 5rem;
`;

const GridItem = styled.article`
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    img {
      opacity: 1;
      transition: opacity 0.5s cubic-bezier(.6,.49,.39,.49);
      
      &:hover {
        opacity: 0.5;
      }
    }
  }

  figure {
    margin: 0;
    text-align: center;
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
  }
  h2 {
    ${font__projectsTitle};
  }
`;