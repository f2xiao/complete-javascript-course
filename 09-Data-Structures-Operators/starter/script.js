'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderFood: function (mainIndex = 1, starterIndex = 0) {
    // console.log(mainIndex, starterIndex);
    console.log(
      `main: ${restaurant.mainMenu[mainIndex]} and starter: ${restaurant.starterMenu[starterIndex]} are added to order.`
    );
    return [
      restaurant.mainMenu[mainIndex],
      restaurant.starterMenu[starterIndex],
    ];
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

// Basic Assignment
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
// RegExp.prototype.exec()

//////////////////////////////////////////////////////////////////////
// Object Destructuring

// Basic assignment
const { fri: Friday } = restaurant.openingHours;
console.log(Friday);
// Assignment without declaration
// Assigning to new variable names
// Default values
// Assigning to new variables names and providing default values

// Unpacking fields from objects passed as a function parameter

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
console.log(open, close);
// For of iteration and destructuring
