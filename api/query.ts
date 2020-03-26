import axios, { AxiosRequestConfig } from 'axios';
import { Response } from '../models/response';

const axiosGraphQL = axios.create({
  baseURL: `${process.env.SCHEMA_PATH}`,
});

export type RequestConfig = AxiosRequestConfig;

export default function (
  query: string,
  variables?: any
): Promise<Response> {
  return new Promise(async function (resolve, reject) {
    axiosGraphQL
    .post('', { query, variables: variables })
    .then(response => {
      resolve(response.data);
    })
    .catch((error) => {
      console.log(`AXIOS error ${error}`);
      reject(error);
    });
  });
}
