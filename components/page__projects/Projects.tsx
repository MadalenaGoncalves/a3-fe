import Link from 'next/link';

import { TResponseData } from '../../api/types';
import { getMainImageUrl } from '../../api/utils';
import withErrorHander from '../../hocs/withErrorHander';
import { TApiProjectMinimal } from '../../models/serverTypes';

import PageLayout from '../PageLayout';
import { GridList, GridItem } from './styles';


const Projects = (props: TResponseData) => {
  const projects = props.data;
  
  return (
    <PageLayout title="Projects">
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
