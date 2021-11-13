import icons from 'url:../img/icons.svg';
import View from './View';

class SearchView extends View {
  _parentEl = document.querySelector('.search');
  _errorMessage = `No recipes found for your query. Please try again!`;
  _message = '';

  addHandlerRender(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  getQuery() {
    return this._parentEl.querySelector('.search__field').value;
  }
}

export default new SearchView();
