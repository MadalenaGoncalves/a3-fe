import { NextPage } from 'next';

import { query as q, GET_PROJECT } from '../../api';
import { Response, isData, ProjectsData } from '../../models/response';
import { Project as P } from '../../models/types';

// import ErrorHandler from '../../components/ErrorHandler';
import Project from '../../components/page__project/Project';


const ProjectPage: NextPage<Response> = (props) => {
  // console.log(props);
  if (isData(props)) {
    let data = props.data as ProjectsData;
    return (
      <Project {...data.projects[0] as P} />
    );
  } else {
    return <div>TODO: handle error</div>
  }

  // const renderHandler = (response: ResponseData) => {
  //   const project = new Project(response.data as ResponseProject);
  //   project.setRelations(response.relations);

  //   return (<ProjectComponent project={project} />);
  // }
  // return (
  //   <ErrorHandler response={props} render={renderHandler} />
  // );
}

ProjectPage.getInitialProps = async ({ query }) => {
  try {
    let response: Response;
    response = await q(GET_PROJECT, { uuid: query.id });
    return response;
  } catch (err) {
    return err;
  }
};

export default ProjectPage;