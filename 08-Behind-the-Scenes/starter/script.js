'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with the same name as outer scope's varible
      const firstName = 'Steven';

      // Reassigning outer scope's varible
      output = 'NEW OUTPUT!';

      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3));
    }
    // console.log(str);
    console.log(millenial);
    console.log(firstName);
    console.log(output);
  }

  //   console.log(millenial);
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

/*
// Variable hoisting
console.log(me); // won't give you error message
// console.log(job); // ReferenceError: Cannot access 'job' before initialization
// console.log(year); // won' be executed since it stops at line 44 because of the error

var me = 'jonas';
let job = 'teacher';
const year = 1991;

// Function hoisting
console.log(addDecl(1, 1));
console.log(addExpr);
// console.log(addExpr(1, 1)); // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(1.1)); // ReferenceError: Cannot access 'addExpr' before initialization

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
console.log(this); // window object in the global scope

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const mitilda = {
  year: 2017,
};
console.log(mitilda);
mitilda.calcAge = jonas.calcAge;
console.log(mitilda);
mitilda.calcAge();

const f = jonas.calcAge;
f(); // this = undefined
*/

/*
// Regular function vs. Arrow function
var firstName = 'Matilda';
var x = 1;

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // Solution 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();
*/

// Primitive types
let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {};

// Copying object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

// end
