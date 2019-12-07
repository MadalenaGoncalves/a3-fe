import { NextPage } from 'next';

import { TResponse, TResponseError } from '../../../api/types';
import ProjectForm from '../../../components/page__admin/ProjectForm';
import Project from '../../../models/project';

const AdminAddProjectPage: NextPage<TResponse> = (props) => {
  return (
    <ProjectForm add {...props} />
  );
}

export default AdminAddProjectPage;

interface Props {
  data: Project,
  error?: TResponseError
}

AdminAddProjectPage.getInitialProps = async () => {
  const initialProps: Props = {
    data: new Project()
  }

  return initialProps;
};