import { NextPage } from 'next';

import get from '../../../../api/get';
import { TResponse, TResponseError } from '../../../../api/types';
import { API_PATH_ONE_PROJECT } from '../../../../api/constants';
import Project from '../../../../models/project';

import ProjectForm from '../../../../components/page__admin/ProjectForm';

interface Props {
  data: Project,
  error?: TResponseError
}

const AdminEditProjectPage: NextPage<TResponse> = (props) => {
  return (
    <ProjectForm {...props} />
  );
}

AdminEditProjectPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  
  try {
    const response = await get(API_PATH_ONE_PROJECT, { id });
    const data = response.data[0];

    const initialProps: Props = {
      data: new Project(data)
    }

    return initialProps;

  } catch (err) {
    return err;
  }
};

export default AdminEditProjectPage;
