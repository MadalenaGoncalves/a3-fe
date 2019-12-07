import Link from 'next/link';
import styled from 'styled-components';

import { TResponseData } from '../../api/types';
import { getMainImageUrl } from '../../api/utils';
import withErrorHander from '../../hocs/withErrorHander';
import { TApiProjectMinimal } from '../../models/serverTypes';

import PageLayout from '../PageLayout';
// import PageTitle from '../PageTitle';

import media from '../../styles/media';
import { font__projectsTitle } from '../../styles/styleguide/typography';


// <HeroImageSection img="/static/images/gerr_ALLO-20_500.jpg"></HeroImageSection>
const Projects = (props: TResponseData) => {
  const projects = props.data;
  
  return (
    <PageLayout title="Projects">
      {/* <PageTitle>Projekte</PageTitle> */}

      <GridList>
        {projects && projects.map((project: TApiProjectMinimal) => {
          return (
            <GridItem key={project.id}>
              {project.imageId ? (
                  <Link href='/projects/[id]' as={`/projects/${project.id}`} passHref>
                    <a title={project.title}>
                      {project.imageId ? (
                        <figure>
                          <img src={getMainImageUrl(project.filename, project.fileformat)} alt="" />
                          <figcaption><h2>{project.title}</h2></figcaption>
                        </figure>
                      ) : (
                        <h2>{project.title}</h2>
                      )}
                    </a>
                  </Link>
                  ) : (
                    <h2>{project.title}</h2>
                  )}
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
    height: 100%;
    margin: 0;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
  }

  figcaption {
    display: block;
    margin-top: auto;
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: auto;
    margin-bottom: auto;
  }

  h2 {
    ${font__projectsTitle};
  }
`;