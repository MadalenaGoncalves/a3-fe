import { TApiContact, TApiImage } from './serverTypes';

export default class Contact {
  id?: string;
  department?: string;
  name?: string;
  address?: string;
  postcode?: string;
  city?: string;
  phone?: string;
  fax?: string;
  url?: string;
  email?: string;
  photo?: TApiImage;

  constructor(data?: TApiContact) {
    if (!data) {
      this.createEmpty();
      return;
    }

    this.id = data.id;
    this.name = data.name;
    if (data.department) this.department = data.department;
    if (data.address) this.address = data.address;
    if (data.postcode) this.postcode = data.postcode;
    if (data.city) this.city = data.city;
    if (data.phone) this.phone = data.phone;
    if (data.fax) this.fax = data.fax;
    if (data.url) this.url = data.url;
    if (data.email) this.email = data.email;
    
    if (data.relations && data.relations.photo) {
      data.relations.photo.forEach((img: TApiImage) => {
        this.photo = img;
      });
    }
  }

  createEmpty() {
    this.id = undefined;
    this.name = undefined;
    this.department = undefined;
    this.address = undefined;
    this.postcode = undefined;
    this.city = undefined;
    this.phone = undefined;
    this.fax = undefined;
    this.url = undefined;
    this.email = undefined;
    this.photo = undefined;
  }
}

