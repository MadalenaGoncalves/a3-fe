import { AxiosResponse, AxiosError } from 'axios';
import { A3Projekte, A3ProjekteDatenschutz, 
  About, Archive, Contact, Datenschutz, 
  Impressum, Project } from './types';

export type QueryData =
  A3ProjekteDatenschutzData |
  A3ProjekteData |
  AboutData |
  ArchiveData |
  ContactsData |
  DatenschutzData |
  ImpressumData |
  ProjectData |
  ProjectsData
;

export type A3ProjekteDatenschutzData = { a3ProjekteDatenschutz: A3ProjekteDatenschutz };
export type A3ProjekteData = { a3Projekte: A3Projekte };
export type AboutData = { about: About };
export type ArchiveData = { archive: Archive };
export type ContactsData = { contacts: Array<Contact> };
export type DatenschutzData = { datenschutz: Datenschutz };
export type ImpressumData = { impressum: Impressum };
export type ProjectData = { project: Project };
export type ProjectsData = { projects: Array<Project> };

export type Response = AxiosResponse<QueryData> | AxiosError<any>;

export const isData = (r: Response): r is AxiosResponse<QueryData> =>
  (r as AxiosResponse<QueryData>).data !== undefined;

export const isError = (r: Response): r is AxiosError<any> =>
  (r as AxiosError<any>).code !== undefined;