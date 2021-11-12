export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  if (!response.ok)
    throw new Error(`Something is wrong 💥💥💥 ${response.status} `);

  response = await response.json();

  let { recipe } = response.data;

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
};
