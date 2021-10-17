'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const images = document.querySelector('.images');

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

function renderCountry(data, className = '') {
  const html = `<article class="country ${className}">
<img class="country__img" src="${data.flags.png}" />
<div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
    1
  )}M people</p>
  <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
  <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
</div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}
function renderError(errMsg) {
  countriesContainer.insertAdjacentText('beforeend', errMsg);
  countriesContainer.style.opacity = 1;
}

function getJSON(APIurl) {
  return fetch(APIurl).then(response => {
    // console.log(response);
    if (!response.ok)
      throw new Error(`can not find the country ${response.status}`);

    return response.json();
  });
}

function getCountryData(country, APIurl) {
  // fetch(APIurl)
  //   .then(response => {
  //     if (!response.ok) throw new Error('Something went wrong');
  //     return response.json();
  //   })
  getJSON(APIurl)
    .then(data => {
      if (data.length !== 1) {
        data = data.filter(ele => ele.name.common == country);
      }

      console.log(data);
      if (!data[0]) throw new Error(`No country found`);

      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // const neighbour = '';
      console.log(neighbour);
      if (!neighbour) throw new Error(`No neighbour found`);
      const neightbourAPIurl = `https://restcountries.com/v3.1/alpha/${neighbour}`;
      return getJSON(neightbourAPIurl);
    })
    /* .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`can not find the country ${response.status}`);
      return response.json();
    }) */
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0], 'neighbour');
    })
    .catch(error => {
      console.error(`${error} 💥💥💥`);
      renderError(`💥💥oh no, ${error.message} 💥💥`);
    });
}

/* btn.addEventListener('click', () => {
  const country = 'China';
  const APIurl = `https://restcountries.com/v3.1/name/${country}`;
  getCountryData(country, APIurl);
}); */

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/

/* const whereAmI = (lat, lng) => {
  return fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  )
    .then(response => {
      if (!response.ok) throw new Error('Position not found');
      return response.json();
    })
    .then(data => {
      console.log(data);
      // const { city, country } = data.address;
      //  countriesContainer.insertAdjacentHTML(
      //   'beforeend',
      //   `You are in ${city}, ${country}`
      // );
      // renderCountry(country);
      return data.address;
    })
    .catch(error => {
      console.error(`${error}`);
      renderError(`💥💥💥${error.message}💥💥💥`);
    });
}; */

/* btn.addEventListener('click', () => {
  whereAmI(52.508, 13.381).then(data => {
    const { city, country } = data;
    console.log(`You are in ${city}, ${country}`);
    getCountryData(country, `https://restcountries.com/v3.1/name/${country}`);
  });
});
 */

///////////////////////////////////////
// Promisifying the Geolocation API

/* navigator.geolocation.getCurrentPosition(
  position => {
    console.log(position);
    const { latitude: lat, longitude: lng } = position.coords;
    console.log(lat, lng);
  },
  error => {
    console.log(error);
  }
); */

const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

/* btn.addEventListener('click', () => {
  getPosition()
    .then(position => {
      // console.log(position);
      const { latitude: lat, longitude: lng } = position.coords;
      return whereAmI(lat, lng);
    })
    .then(data => {
      const { city, country } = data;
      console.log(`You are in ${city}, ${country}`);
      getCountryData(country, `https://restcountries.com/v3.1/name/${country}`);
    });
}); */

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.
PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀
*/

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    // load successfully
    img.addEventListener('load', event => {
      images.appendChild(img);
      resolve(img);
    });

    // load failed

    img.addEventListener('error', event => {
      reject(new Error('image not found'));
    });
  });
}

/* let imgPath = `./img/img-1.jpg`;
console.log(imgPath); */
/* const img = document.createElement('img');
img.src = imgPath;
// load successfully
img.addEventListener('load', event => {
  images.appendChild(img);
}); */
// let currentImg;
const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(1)
//   .then(res => {
//     console.log('1s has passed');
//     return wait(1);
//   })
//   .then(res => {
//     console.log('2s has passed');
//   });

/* createImage(`./img/img-1.jpg`)
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(res => {
    currentImg.style.display = 'none';
    return createImage(`./img/img-2.jpg`);
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(res => {
    currentImg.style.display = 'none';
    return createImage(`./img/img-3.jpg`);
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(res => {
    currentImg.style.display = 'none';
  })
  .catch(error => {
    images.insertAdjacentHTML('beforeend', `ohhh no 💥💥💥${error.message}`);
  });
 */

///////////////////////////////////////
// Simple promise with the Promise constructor

/* console.log(typeof Promise);
console.log(Promise.prototype);
// whereAmI is anonymous function
console.log(typeof whereAmI);
console.log(whereAmI.prototype);
console.log(typeof getPosition);
console.log(getPosition.prototype);
const testPromise = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Congragulation 🎁');
      } else {
        reject(new Error('Sorry 💥'));
      }
    }, 3000);
  });
};

console.log(typeof testPromise);
console.log(testPromise.prototype);
testPromise()
  .then(res => {
    console.log(res);
    return testPromise();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(`${err}`);
    console.log(`${err.message}`);
  });
 */

///////////////////////////////////////
// Consuming Promises with Async/Await
// Hnadling errors with try...catch()
/* const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geolocation
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    if (!resGeo.ok) throw new Error('Position not found');

    const dataObj = await resGeo.json();
    // console.log(dataObj);

    // const dataGeo = dataObj.address;
    const dataGeo = { country: 'aaaa' };
    // Country data

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error(`Problem getting country ${res.status}`);
    const data = await res.json();
    if (!data) throw new Error('Country not found');
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    console.error(`${error} 💥💥`);
    renderError(`💥💥oh no, ${error.message} 💥💥`);
    throw error;
  }
};
btn.addEventListener('click', () => {
  countriesContainer.innerHTML = '';
  whereAmI()
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.error(`${error} 💥💥💥💥`);
      console.log(whereAmI());
    });
}); */

///////////////////////////////////////
// Running Promise in Parallel
/* const get3Countries = async function (c1, c2, c3) {
  const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
  const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
  const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

  console.log(data1.capital[0]);
  console.log(data2.capital[0]);
  console.log(data3.capital[0]);
};
get3Countries('China', 'Canada', 'USA'); */

// Promise.all()
const get3Countries = async function (c1, c2, c3) {
  const data = await Promise.all([
    getJSON(`https://restcountries.com/v3.1/name/${c1}`),
    getJSON(`https://restcountries.com/v3.1/name/${c2}`),
    getJSON(`https://restcountries.com/v3.1/name/${c3}`),
  ]);

  data.map(d => {
    console.log(d[0].capital[0]);
  });
};
// get3Countries('China', 'Canada', 'USA');

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
// Promise.race()

/* (async function (c1 = 'China', c2 = 'Canada', c3 = 'USA') {
  const data = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/${c1}`),
    getJSON(`https://restcountries.com/v3.1/name/${c2}`),
    getJSON(`https://restcountries.com/v3.1/name/${c3}`),
  ]);
  console.log(data);
})(); */

const timeout = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

/* Promise.race([getJSON(`https://restcountries.com/v3.1/name/China`), timeout(2)])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('ANother success '),
])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
Promise.all([
  Promise.reject('Error 1'),
  Promise.reject('Error 2'),
  Promise.resolve('success '),
])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
Promise.any([
  Promise.reject('Error 1'),
  Promise.reject('Error 2'),
  Promise.resolve('Another success '),
])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
Promise.any([
  Promise.reject('Error 1'),
  Promise.reject('Error 2'),
  Promise.reject('Another error '),
])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  }); */

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.
PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).
TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
GOOD LUCK 😀
*/

let currentImg;
const loadNPause = async function (imgPath) {
  currentImg = await createImage(imgPath);
  console.log(currentImg);
  await wait(2);
  currentImg.style.display = 'none';
};

// loadNPause(`./img/img-1.jpg`);

const loadAll = async function (imgArr) {
  // for (let index = 0; index < imgArr.length; index++) {
  //   loadNPause(imgArr[index]);
  // }
  let imgs = [];
  imgArr.map(async function (imgPath, index) {
    imgs[index] = await loadNPause(imgPath);
  });
};
let imgArr = [`./img/img-1.jpg`, `./img/img-2.jpg`, `./img/img-3.jpg`];
loadAll(imgArr);
