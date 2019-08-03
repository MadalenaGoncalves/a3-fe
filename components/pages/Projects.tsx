import Link from 'next/link';

import { ResponseData } from '../../api/types';

import PageLayout from '../../components/PageLayout';

import withErrorHander from '../../hocs/withErrorHander';

import Project from '../../models/project';


const navStyles: any = { display: 'flex', flexDirection: 'column' };

const Projects = (props: ResponseData) => {
  const projects = props.data;
  
  return (
    <PageLayout title="Projects">
      <h1>Projects</h1>

      <nav style={navStyles}>
        {projects && projects.map((project: Project) => {
          return (
            <Link key={project.id} href='/projects/[id]' as={`/projects/${project.id}`}>
              <a title={project.title}>
                {project.title}
              </a>
            </Link>
          );
        })}
      </nav>
    </PageLayout>
  );
}

export default withErrorHander(Projects);
