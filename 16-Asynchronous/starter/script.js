'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// AJAX Call
const request = new XMLHttpRequest();
const country = 'Canada';
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send();

request.addEventListener('load', function () {
  let data = JSON.parse(this.responseText);

  if (data.length == 1) {
    [data] = JSON.parse(this.responseText);
  } else {
    data = data.filter(ele => ele.name.common == country);
  }

  console.log(data);

  const html = `<article class="country">
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
});
