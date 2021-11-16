import * as model from './model.js';
import icons from 'url:../img/icons.svg';
import recipeView from './recipeView.js';
import searchView from './searchView.js';
import resultsView from './resultsView.js';
import paginationView from './paginationView.js';
// console.log(icons);
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    // get hashcahnge
    const id = window.location.hash.slice(1);

    if (!id) return;
    // render spinner
    recipeView.renderSpinner();

    // load recipe
    await model.loadRecipe(id);
    let recipe = model.state.recipe;
    console.log(recipe);

    // render recipe
    recipeView.render(recipe);
  } catch (error) {
    recipeView.renderError();
    console.error(`${error}`);
  }
};
const controlSearchResults = async function () {
  try {
    // get search query
    const query = searchView.getQuery();
    // console.log(query);

    if (!query) return;
    // render spinner
    resultsView.renderSpinner();

    // load search results
    await model.loadSearchResults(query);
    console.log(model.state.search.results);

    // render search results
    resultsView.render(model.getSearchResultsPerPage());

    // render pagination button
    paginationView.render(model.state.search);
  } catch (error) {
    searchView.renderError();
    console.error(`${error}`);
  }
};

const controlPagination = function (goToPage) {
  // render search results
  resultsView.render(model.getSearchResultsPerPage(goToPage));

  // render pagination button
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerRender(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
