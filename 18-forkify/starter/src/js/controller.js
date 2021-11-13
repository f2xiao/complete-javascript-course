import * as model from './model.js';
import icons from 'url:../img/icons.svg';
import recipeView from './recipeView.js';
import searchView from './searchView.js';
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
    console.log(query);

    if (!query) return;
    // render spinner
    recipeView.renderSpinner();

    // load search results

    // render search results
  } catch (error) {
    searchView.renderError();
    console.error(`${error}`);
  }
};

// ['hashchange', 'load'].forEach(ev =>
//   window.addEventListener(ev, controlRecipes)
// );

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerRender(controlSearchResults);
};
init();
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
