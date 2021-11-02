'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderDelivery({ mainIndex = 1, starterIndex = 0 } = {}) {
    // console.log(mainIndex, starterIndex);
    console.log(
      `starter: ${this.starterMenu[starterIndex]} and main: ${this.mainMenu[mainIndex]} are added to order.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2} and ${ing3} is ordered`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//////////////////////////////////////////////////////////////////////
// Array Destructuring

/* // Basic Assignment
let [a, b] = restaurant.starterMenu;
console.log(a, b);

// Assignment separate from declaration

let e, f;
[e, f] = [2, 3];
console.log(e, f);

// Default values
const [main1, main2, main3, main4 = 'Apple'] = restaurant.mainMenu;
console.log(main1, main2, main3, main4);

// Assigning the rest of an array to a variable with the rest pattern
const [c, ...d] = restaurant.starterMenu;
console.log(c, d);

// Swapping variables
[a, b] = [b, a];
console.log(a, b);

// Parsing an array returned from a function
let [main, starter] = restaurant.orderFood();
console.log(main, starter);
[main, starter] = restaurant.orderFood(2, 3);
console.log(main, starter);

// Ignoring some returned values

[main] = restaurant.orderFood(2);
console.log(main);

// Ignore all returned values: what is the usage senario for this? or just happen to be what you can do?

[,] = restaurant.orderFood();

// Unpacking values from a regular expression match
// RegExp.prototype.exec() */

//////////////////////////////////////////////////////////////////////
// Object Destructuring

/* // Basic assignment
const { fri: Friday } = restaurant.openingHours;
console.log(Friday);
// Assignment without declaration
let catName, catAge;
({ name: catName, age: catAge } = { name: 'Pixie', age: 8 });
// Assigning to new variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Default values
// Assigning to new variables names and providing default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Unpacking fields from objects passed as a function parameter
restaurant.orderDelivery();
// Setting a function parameter's default value
function drawES2015Chart({
  size = 'big',
  cords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, cords, radius);
  // do some chart drawing
}
drawES2015Chart();
drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});

let { size = 'big', cords = { x: 0, y: 0 }, radius = 25 } = {};
console.log(size, cords, radius);
// Nested object and array destructuring
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close); */

///////////////////////////////////////
// The Spread Operator (...)
/* // Create a new array with an existeing array
const arr = [3, 4, 5];
const newArr = [1, 2, ...arr];
console.log(newArr);
// Copy array, shallow copy
const arr1 = [
  1,
  {
    name: 'Pixie',
    categories: {
      home: 'waterloo',
    },
  },
  3,
];
const arrCopy = [...arr1];
console.log(arrCopy);
console.log(arrCopy === arr1);

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Pixie';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log(...str, ` The Ruler`);
// Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);
// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Nick' };
console.log(newRestaurant);
console.log(restaurant); */

///////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring
// SPREAD, because on RIGHT side of =
// REST, because on LEFT side of =
// Objects
// 2) Functions

///////////////////////////////////////
// Short Circuiting (&& and ||)
console.log('---- OR ----');

// Use ANY data type, return ANY data type, short-circuiting
console.log('---- AND ----');
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/
