import { Image } from '../models/response';

export function getImageUrl(image: Image): string {
  return createUrl(image, 'image');
}
export function getThumbnailUrl(image: Image): string {
  return createUrl(image, 'thumbnail');
}
export function getMainImageUrl(filename: string, fileformat: string): string {
  return `${process.env.API_URL}thumbnail/${filename}.${fileformat}`;
}
function createUrl(image: Image, endpoint: string): string {
  const { filename, fileformat } = image;
  return `${process.env.API_URL}${endpoint}/${filename}.${fileformat}`;
}