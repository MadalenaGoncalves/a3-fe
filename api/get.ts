import fetch from 'isomorphic-fetch';
import { ServerResponse } from '../models/response';


function get(path: string, query: any = null): Promise<ServerResponse> {
  let url = `${process.env.API_URL}${path}`;
  if (query) {
    const { id } = query;
    url = url.replace(':id', id);
  }

  console.log('@get ', url, query);
  return new Promise(async function (resolve, reject) {
    // Uncomment to test api errors -----
    // response.error = {
    //   code: 500,
    //   message: "test error"
    // };
    // reject(response);
    // ----- Uncomment to test api errors

    let fetchResponse: Response;
    try {
      fetchResponse = await fetch(url);
      // console.log('-------------------START------------------------');
      // console.log(fetchResponse);
      // console.log('--------------------END-------------------------');

      if (fetchResponse && fetchResponse.ok) {
        const response = await fetchResponse.json();
        resolve(response);

      } else {
        const { status, statusText } = fetchResponse;
        const error = {
          code: status,
          message: statusText
        }
        reject(error);
      }
    } catch (err) {
      console.log('Error fetching from', url);
      const error = {
        code: 500,
        message: err
      };
      reject(error);
    }
  });
}

export default get;


// import fetch from 'isomorphic-fetch';
// import { ResponseData, ResponseError } from './types';

// function get(path: string, query: any = null): Promise<Response> {

//   if (query) {
//     const { id } = query;
//     url = `${url}/${id}`;
//   }
//   // console.log('@api ', url, query);

//   return new Promise(async function (resolve, reject) {
//     let fetchResponse: any;

//     try {
//       fetchResponse = await fetch(url);
//       // console.log('-------------------START------------------------');
//       // console.log(fetchResponse);
//       // console.log('--------------------END-------------------------');

//       if (fetchResponse && fetchResponse.ok) {

//         const { data } = await fetchResponse.json();
//         const okResponse: ResponseData = data;
//         resolve(okResponse);

//       } else {

//         const { status, statusText } = fetchResponse;
//         const errorResponse: ResponseError = {
//           code: status,
//           message: statusText
//         }
//         reject(errorResponse);

//       }
//     } catch (err) {

//       console.log('Error fetching from', url)
//       const errorResponse: ResponseError = {
//         code: 500,
//         message: err
//       }
//       reject(errorResponse);

//     }
//   });
// }

// export default get;
