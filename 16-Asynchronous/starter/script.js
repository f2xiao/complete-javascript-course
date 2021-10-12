'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// AJAX Call

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

function getCountryData(country, APIurl) {
  fetch(APIurl)
    .then(response => {
      if (!response.ok) throw new Error('Something went wrong');
      return response.json();
    })
    .then(data => {
      if (data.length !== 1) {
        data = data.filter(ele => ele.name.common == country);
      }

      console.log(data);

      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      const neightbourAPIurl = `https://restcountries.com/v3.1/alpha/${neighbour}`;
      return fetch(neightbourAPIurl);
    })
    .then(response => {
      if (!response.ok) throw new Error('Something went wrong');
      return response.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'));
}

btn.addEventListener('click', () => {
  const country = 'afa';
  const APIurl = `https://restcountries.com/v3.1/name/${country}`;
  getCountryData(country, APIurl);
});
