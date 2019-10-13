// export interface IProject {
//   id?: string,
//   title?: string,
//   description?: string,
//   category?: string,
//   start_year?: number,
//   end_year?: number,
//   address?: string,
//   postcode?: string,
//   city?: string,
//   gross_area?: number,
//   floor_area?: number,
//   phases?: string[],
//   client?: string,
//   image?: string,
// }

export default class Project {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  // start_year?: number;
  // end_year?: number;
  // address?: string;
  // postcode?: string;
  // city?: string;
  gross_area?: number;
  floor_area?: number;
  // phases?: string[];
  client?: string;
  image?: string;
  date?: string;
  address?: string;
  phases?: string;

  // constructor () {}
  constructor(data: any) {
    if (data.id) this.id = data.id;
    if (data.title) this.title = data.title;
    if (data.description) this.description = data.description;
    if (data.category) this.category = data.category;
    if (data.gross_area) this.gross_area = data.gross_area;
    if (data.floor_area) this.floor_area = data.floor_area;
    if (data.client) this.client = data.client;
    if (data.image) this.image = data.image;

    this.date = this.getDateStr(data.start_year, data.end_year);
    this.address = this.getAddressStr(data.address, data.postcode, data.city);
    this.phases = this.getPhasesStr(data.phases);
  }

  getDateStr(start_year: string, end_year: string): string {
    // return "test";
    const values = [start_year, end_year];
    return values.join(" - ");
  }

  getAddressStr(address: string, postcode: string, city: string): string {
    const part1 = address;
    const part2 = [postcode, city];
    const values = [part1, part2.join(" ")];
    return values.join(", ");
  }

   getPhasesStr(phases: string[]): string | undefined {
    if (!phases || phases.length == 0)
      return;
    return phases.join(" | ");
  }
}