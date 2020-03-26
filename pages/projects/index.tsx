import { NextPage } from 'next';

import { query, GET_PROJECTS } from '../../api';
import { Response, isData, ProjectsData } from '../../models/response';

// import ErrorHandler from '../../components/ErrorHandler';
import Projects from '../../components/page__projects/Projects';

const ProjectsPage: NextPage<Response> = (props) => {
  // console.log('ProjectsPage', props);
  if (isData(props)) {
    return (
      <Projects {...props.data as ProjectsData} />
    );
  } else {
    return <div>TODO: handle error</div>
  }
  // const renderHandler = (response: Response) => {
  //   return (
  //     <Projects projects={response as Project[]} />
  //   );
  // }
  // return (
  //   <ErrorHandler response={props} render={renderHandler} />
  // );
}

//[ 'err', 'req', 'res', 'pathname', 'query', 'asPath' ]
ProjectsPage.getInitialProps = async () => {
  try {
    let response: Response;
    response = await query(GET_PROJECTS);
    return response;
  } catch (err) {
    console.log("ERRO", err);
    return err;
  }
};

export default ProjectsPage;
