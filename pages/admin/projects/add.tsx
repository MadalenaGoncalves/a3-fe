import { NextPage } from 'next';

import Project from '../../../models/project';

import ProjectForm from '../../../components/admin/ProjectForm';

const AdminAddProjectPage: NextPage<Project> = (project) => {
  return (
    <ProjectForm add project={project} />
  );
}

export default AdminAddProjectPage;

AdminAddProjectPage.getInitialProps = async () => {
  return new Project();
};