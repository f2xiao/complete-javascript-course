import { TIMEOUT_SEC } from './config';
export const getJSON = async function (url) {
  try {
    let response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    let data = await response.json();

    console.log(response.ok);
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
