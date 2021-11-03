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
const obj = {a:1,b:2};
console.log(obj, typeof obj);
const showRecipe = async function () {
  try {
    let res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'); // returns a response object
    if(!res.ok) throw new Error(`Something is wrong ${res.status}`); // will stop execution of the code below?
    const {data} = await res.json(); // parse the response body data from the response object
    const {recipe} = data;
    console.log(recipe);
    
  } catch (error) {
    console.error(`${error} 💥💥💥`);
  }
}
showRecipe();