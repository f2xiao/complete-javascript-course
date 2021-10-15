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
    console.log(response);
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

const whereAmI = (lat, lng) => {
  return fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      // const { city, country } = data.address;
      /*  countriesContainer.insertAdjacentHTML(
        'beforeend',
        `You are in ${city}, ${country}`
      );
      renderCountry(country); */
      return data.address;
    })
    .catch(error => {
      console.log(error);
    });
};

/* btn.addEventListener('click', () => {
  whereAmI(52.508, 13.381).then(data => {
    const { city, country } = data;
    console.log(`You are in ${city}, ${country}`);
    getCountryData(country, `https://restcountries.com/v3.1/name/${country}`);
  });
});
 */
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
let currentImg;
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

createImage(`./img/img-1.jpg`)
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
