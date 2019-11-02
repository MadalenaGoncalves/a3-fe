export type TResponseData = any;

export type TResponseError = {
  code: number,
  message: string
};

export type TResponse = {
  data: TResponseData,
  error?: TResponseError
}
