import * as model from './model.js';
import recipeView from './recipeView.js';
import icons from 'url:../img/icons.svg';
// console.log(icons);
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    // render spinner
    recipeView.renderSpinner();

    // load recipe
    await model.loadRecipe(id);
    let recipe = model.state.recipe;
    console.log(recipe);

    // render recipe
    recipeView.render(recipe);
  } catch (error) {
    console.error(`${error}`);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
