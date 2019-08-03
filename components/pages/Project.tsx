import { ResponseData } from '../../api/types';

import PageLayout from '../../components/PageLayout';

import withErrorHander from '../../hocs/withErrorHander';

import TProject from '../../models/project';


const Project = (props: ResponseData) => {
  const project: TProject = props.data[0];

  return (
    <PageLayout title={project.title}>
      <h1>{project.title} ({project.id})</h1>

      <p>{project.description}</p>
      <p>{project.start_year} - {project.end_year}</p>
      <p>{project.category}</p>
      <p>
        <span>{project.address}</span>
        <br />
        <span>{project.postcode} {project.city}</span>
      </p>
      <p>Gross Area: {project.gross_area}</p>
      <p>Floor Area: {project.floor_area}</p>
      <p>{project.phases && project.phases.map((phase: string) => ([
          <span>{phase}</span>,
          <span> | </span>
      ]))}</p>
      <p>{project.client}</p>
      <p>{project.image}</p>
    </PageLayout>
  );
}

export default withErrorHander(Project);

