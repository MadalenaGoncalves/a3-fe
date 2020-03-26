import { Project, UploadFile as Image } from './types';

export function getUrlBase(): string {
  return `${process.env.API_URL}`;
}

export function buildImageUrl(img: Image) {
  // return `${getUrlBase()}${img.url}`;
  return img.url;
}

export function buildFloorAreaString(proj: Project) {
  if (proj.floor_area)
    return `ca. ${proj.floor_area} m2`;
  return null;
}

export function buildAddressString(proj: Project) {
  let address: string;
  address = [proj.address, proj.postcode].join(', ');
  address = [address, proj.city].join(' ');
  return address;
}
