import Link from 'next/link';

import { buildImageUrl } from '../../models/utils';
import { ProjectsData } from '../../models/response';
import { Project, UploadFile as ImageFile } from '../../models/types';

import PageLayout from '../PageLayout';
import { SimplePage } from '../PageLayout/styles';
import { GridList, GridItem, Image } from './styles';


const Projects = (props: ProjectsData) => {
  return (
    <PageLayout title="Projects">
      <SimplePage fullWidth>
        <GridList>
          {props.projects.map((project: Project) => {
            return (
              <GridItem key={project.uuid}>
                <Link href='/projects/[id]' as={`/projects/${project.uuid}`} passHref>
                  <a>
                    {project.cover ? (
                      <Image url={`${buildImageUrl(project.cover as ImageFile)}`} />
                    ) : (
                      <Image url={'/static/images/placeholder.png'} />
                    )}
                    <h2>{project.title}</h2>
                  </a>
                </Link>
              </GridItem>
            );
          })}
          {/* {projects && projects.map((project: Project) => {
            return (
              <GridItem key={project.id}>
                <Link href='/projects/[id]' as={`/projects/${project.id}`} passHref>
                  <a>
                    {project.cover ? (
                      <Image url={`${buildImageUrl(project.cover)}`} />
                    ) : (
                      <Image url={'/static/images/placeholder.png'} />
                    )}
                    <h2>{project.title}</h2>
                  </a>
                </Link>
              </GridItem>
            );
          })}
          {projects && projects.map((project: Project) => {
            return (
              <GridItem key={project.id}>
                <Link href='/projects/[id]' as={`/projects/${project.id}`} passHref>
                  <a>
                    {project.cover ? (
                      <Image url={`${buildImageUrl(project.cover)}`} />
                    ) : (
                      <Image url={'/static/images/placeholder.png'} />
                    )}
                    <h2>{project.title}</h2>
                  </a>
                </Link>
              </GridItem>
            );
          })}
          {projects && projects.map((project: Project) => {
            console.log(project.cover);
            return (
              <GridItem key={project.id}>
                <Link href='/projects/[id]' as={`/projects/${project.id}`} passHref>
                  <a>
                    {project.cover ? (
                      <Image url={`${buildImageUrl(project.cover)}`} />
                    ) : (
                      <Image url={'/static/images/placeholder.png'} />
                    )}
                    <h2>{project.title}</h2>
                  </a>
                </Link>
              </GridItem>
            );
          })} */}
        </GridList>
      </SimplePage>
    </PageLayout>
  );
}

export default Projects;
