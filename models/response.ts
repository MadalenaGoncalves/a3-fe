/* From Nextjs documentation: 
  Data returned from `getInitialProps` is serialized when server rendering, 
  similar to a `JSON.stringify`. Make sure the returned object from `getInitialProps` 
  is a plain `Object` and not using `Date`, `Map` or `Set`.
*/
export type ResponseData = {
  code: number,
  data: Project | Project[] | ProjectMinimal[] | Contact | Contact[]
};

export type ResponseError = {
  code: number,
  message: string
};

export type ServerResponse = ResponseData | ResponseError;

export function isError(r: ServerResponse): r is ResponseError {
  return (r as ResponseError).code !== undefined;
}


/*
  Here are described the types expected  from the server
*/

export interface Image {
  id: string,
  caption?: string,
  author?: string,
  filename: string,
  fileformat: string,
  is_photo: boolean,
}

export interface Project {
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
    images: Image[],
  }
}

export interface ProjectMinimal {
  id: string,
  title: string,
  imageId: string,
  filename: string,
  fileformat: string
}

export interface Contact {
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
    photo: Image,
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