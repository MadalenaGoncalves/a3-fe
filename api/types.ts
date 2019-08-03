export type ResponseData = any;

export type ResponseError = {
  code: number,
  message: string
};

export type Response = ResponseData | ResponseError;
