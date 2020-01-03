/*
  Here are described the types expected from the server
*/

export interface TApiImage {
  id: string,
  caption?: string,
  author?: string,
  filename: string,
  fileformat: string,
  is_photo: boolean,
}

export interface TApiProject {
  id: string,
  title: string,
  description?: string,
  category?: string,
  start_year?: number,
  end_year?: number,
  address?: string,
  postcode?: string,
  city?: string,
  gross_area?: number,
  floor_area?: number,
  phases?: string,
  client?: string,
  image?: string,

  relations?: {
    images: TApiImage[],
  }
}

export interface TApiProjectMinimal {
  id: string,
  title: string,
  imageId: string,
  filename: string,
  fileformat: string
}

export interface TApiContact {
  id: string,
  department?: string,
  name: string,
  address?: string,
  postcode?: string,
  city?: string,
  phone?: string,
  email?: string,
  fax?: string,
  url?: string,

  relations?: {
    photo: TApiImage[],
  }
}

// See generics in typescript
// interface TResponseData {
//   <T>(arg: T): T;
// }

// export type TResponseError = {
//   code: number,
//   message: string
// };
// export type TResponse = data: TResponseData<T> | error: TResponseError

// EXAMPLE
// export type NextPage<P = {}, IP = P> = {
//   (props: P): JSX.Element | null
//   defaultProps?: Partial<P>
//   displayName?: string
//   /**
//    * Used for initial page load data population. Data returned from `getInitialProps` is serialized when server rendered.
//    * Make sure to return plain `Object` without using `Date`, `Map`, `Set`.
//    * @param ctx Context of `page`
//    */
//   getInitialProps?(ctx: NextPageContext): Promise<IP>
// }