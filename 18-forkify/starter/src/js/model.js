import { API_URL } from './config';
import { getJSON } from './helpers';
export const state = {
  recipe: {},
  search: {
    query: '',
    page: 1,
    results: [],
    resultsPerPage: 10,
  },
};

export const loadRecipe = async function (id) {
  try {
    let data = await getJSON(`${API_URL}/${id}`);
    // console.log(data);

    let { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    // throw error;
    console.error(error.message);
  }
};
export const loadSearchResults = async function (query) {
  try {
    let data = await getJSON(`${API_URL}/?search=${query}`);
    // console.log(data);
    // console.log(data.data);

    let { recipes } = data.data;
    console.log(recipes);

    state.search.results = recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (error) {
    // throw error;
    console.error(error.message);
  }
};

export const getSearchResultsPerPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage - 1;
  console.log(start, end);
  return state.search.results.slice(start, end);
};

/* loadSearchResults('pizza');
loadRecipe('5ed6604591c37cdc054bc886'); */
