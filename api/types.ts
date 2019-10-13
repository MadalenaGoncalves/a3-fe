export type ResponseData = any;

export type ResponseError = {
  code: number,
  message: string
};

export interface Response {
  data: ResponseData,
  error?: ResponseError
}
// export type Response = ResponseData | ResponseError;
