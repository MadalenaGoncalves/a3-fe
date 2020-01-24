import Link from 'next/link';

import { ProjectMinimal } from '../../models/response';
import { getMainImageUrl } from '../../api/utils';

import PageLayout from '../PageLayout';
import { GridList, GridItem } from './styles';


type Props = {
  projects: ProjectMinimal[]
};
const Projects = (props: Props) => {
  const { projects } = props;
  return (
    <PageLayout title="Projects">
      <GridList>
        {projects && projects.map((project: ProjectMinimal) => {
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

export default Projects;
