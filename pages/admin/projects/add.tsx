import { NextPage } from 'next';

import { TResponse } from '../../../api/types';
import ProjectForm from '../../../components/page__admin/ProjectForm';

const AdminAddContactPage: NextPage<TResponse> = (props) => {
  return (
    <ProjectForm add {...props} />
  );
}

export default AdminAddContactPage;
