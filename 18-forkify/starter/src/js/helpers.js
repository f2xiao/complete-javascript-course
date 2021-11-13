import { TIMEOUT_SEC } from './config';
export const getJSON = async function (url) {
  try {
    let response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]); // response body

    let data = await response.json(); // (transfered data stream) response body text parsed as JSON

    // console.log(response.ok);
    if (!response.ok)
      throw new Error(`${data.message} 💥💥💥 ${response.status} `);

    return data;
  } catch (error) {
    throw error;
  }
};

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
