import { Image, Project as ResponseProject } from './response';

export default class Project {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  addressLine1?: string;
  addressLine2?: string;
  gross_area?: number;
  floor_area?: number;
  client?: string;
  thumbnailId?: string;
  date?: string;
  phases?: string;

  photos?: Image[];
  images?: Image[];

  mainPhoto?: Image;

  constructor(data?: ResponseProject) {
    if (!data) {
      this.createEmpty();
      return;
    }

    this.id = data.id;
    this.title = data.title;
    if (data.description) this.description = data.description;
    if (data.category) this.category = data.category;
    if (data.gross_area) this.gross_area = data.gross_area;
    if (data.floor_area) this.floor_area = data.floor_area;
    if (data.client) this.client = data.client;
    if (data.image) this.thumbnailId = data.image;
    if (data.address) this.addressLine1 = data.address;
    if (data.postcode || data.city) this.addressLine2 = [data.postcode, data.city].join(" ");

    this.date = this.getDateStr(data.start_year, data.end_year);
    // this.address = this.getAddressStr(data.address, data.postcode, data.city);
    this.phases = this.getPhasesStr(data.phases);
    
    if (data.relations && data.relations.images) {
      const photos: Image[] = [];
      const images: Image[] = [];

      // TODO: keep in mind that order is important
      data.relations.images.forEach((img: Image) => {
        // check: ! - typescript non-null assertion operator
        if (img.is_photo) {
          photos!.push(img);
        } else {
          images!.push(img);
        }

        if (this.thumbnailId && img.id === this.thumbnailId) {
          this.mainPhoto = img;
        }

      });
      if (photos.length > 0) this.photos = photos;
      if (images.length > 0) this.images = images;
    }
  }

  createEmpty = () => {
    this.id = undefined;
    this.title = undefined;
    this.description = undefined;
    this.category = undefined;
    this.addressLine1 = undefined;
    this.addressLine2 = undefined;
    this.gross_area = undefined;
    this.floor_area = undefined;
    this.client = undefined;
    this.thumbnailId = undefined;
    this.date = undefined;
    this.phases = undefined;
    this.photos = undefined;
    this.images = undefined;
  }

  getDateStr = (start_year?: number, end_year?: number): string => {
    const values = [start_year, end_year];
    return values.join(" - ");
  }

  getAddressStr = (address: string, postcode: string, city: string): string => {
    const part1 = address;
    const part2 = [postcode, city];
    const values = [part1, part2.join(" ")];
    return values.join(", ");
  }

   getPhasesStr = (phases?: string): string | undefined => {
    if (!phases || phases.length == 0)
      return;
    const list: string[] = phases.split(';');

    return list.join(" | ");
  }
}