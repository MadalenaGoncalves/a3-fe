import { TApiImage } from '../models/serverTypes';

export function getImageUrl(image: TApiImage): string {
  return createUrl(image, 'image');
}
export function getThumbnailUrl(image: TApiImage): string {
  return createUrl(image, 'thumbnail');
}
export function getMainImageUrl(filename: string, fileformat: string): string {
  return `${process.env.API_URL}thumbnail/${filename}.${fileformat}`;
}
function createUrl(image: TApiImage, endpoint: string): string {
  const { filename, fileformat } = image;
  return `${process.env.API_URL}${endpoint}/${filename}.${fileformat}`;
}