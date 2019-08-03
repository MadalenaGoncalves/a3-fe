export interface IProject {
  id?: string,
  title?: string,
  description?: string,
  category?: string,
  start_year?: number,
  end_year?: number,
  address?: string,
  postcode?: string,
  city?: string,
  gross_area?: number,
  floor_area?: number,
  phases?: string[],
  client?: string,
  image?: string,
}

export default class Project implements IProject {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  start_year?: number;
  end_year?: number;
  address?: string;
  postcode?: string;
  city?: string;
  gross_area?: number;
  floor_area?: number;
  phases?: string[];
  client?: string;
  image?: string;

  constructor() {
  }
}