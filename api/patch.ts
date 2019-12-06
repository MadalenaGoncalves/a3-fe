import axios from 'axios';
import { TResponse } from './types';

function patch(path: string, body: any): Promise<TResponse> {
  const { id, ...values } = body;
  let endpoint = `${process.env.API_URL}${path}`;
  endpoint = endpoint.replace(':id', id);
  console.log('@api ', endpoint, values);

  return new Promise(async function (resolve, reject) {
    console.log("@patch");
    
    axios.patch(endpoint, values)
    .then(function (response) {
      console.log("Axios patch OK", response);
      resolve();
    })
    .catch(function (error) {
      console.log('Error patching to ', endpoint, values);
      reject(error);
    });

  });
}

export default patch;
