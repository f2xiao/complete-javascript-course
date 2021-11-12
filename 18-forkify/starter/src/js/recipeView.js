import icons from 'url:../img/icons.svg';
import { Fraction } from 'fractional';
class RecipeView {
  #data;
  #parentEl = document.querySelector('.recipe');
  #errorMessage = `No recipes found for your query. Please try again!`;
  #message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }
  render(data) {
    this.#data = data;
    const markup = this._generateMarkup(data);
    this._clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(error = this.#errorMessage) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${error}</p>
  </div>`;
    this._clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this.#message) {
    const markup = `<div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    let markup = `<div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this._clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this.#parentEl.innerHTML = '';
  }

  _generateMarkup(data) {
    return `
        <figure class="recipe__fig">
        <img src="${data.image}" alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${data.title}</span>
        </h1>
        </figure>
        
        <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="src/img/icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            data.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="src/img/icons.svg#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            data.servings
          }</span>
          <span class="recipe__info-text">servings</span>
        
          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="src/img/icons.svg#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="src/img/icons.svg#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="recipe__user-generated">
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="src/img/icons.svg#icon-bookmark-fill"></use>
          </svg>
        </button>
        </div>
        <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
        
        ${data.ingredients
          .map(
            ing => `
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${
                  ing.quantity ? new Fraction(ing.quantity).toString() : ''
                }</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${ing.unit}</span>
                  ${ing.description}
                </div>
              </li>
           `
          )
          .join('')}
      
            </ul>
            </div>
            <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${
                data.publisher
              }</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${data.sourceUrl}"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="src/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>
            </div>`;
  }
}

export default new RecipeView();
