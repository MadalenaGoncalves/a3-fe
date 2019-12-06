import fetch from 'isomorphic-fetch';
import { TResponse } from './types';


function get(path: string, query: any = null): Promise<TResponse> {
  let url = `${process.env.API_URL}${path}`;
  if (query) {
    const { id } = query;
    url = url.replace(':id', id);
  }

  console.log('@api ', url, query);

  return new Promise(async function (resolve, reject) {
    const response: TResponse = {
      data: null,
    };

    // Uncomment to test api errors -----
    // response.error = {
    //   code: 500,
    //   message: "test error"
    // };
    // reject(response);
    // ----- Uncomment to test api errors

    let fetchResponse: any;

    try {
      fetchResponse = await fetch(url);
      // console.log('-------------------START------------------------');
      // console.log(fetchResponse);
      // console.log('--------------------END-------------------------');

      if (fetchResponse && fetchResponse.ok) {
        const { data } = await fetchResponse.json();
        response.data = data;

        resolve(response);

      } else {
        const { status, statusText } = fetchResponse;
        response.error = {
          code: status,
          message: statusText
        }
        reject(response);
      }
    } catch (err) {
      console.log('Error fetching from', url);
      response.error = {
        code: 500,
        message: err
      };
      reject(response);
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
