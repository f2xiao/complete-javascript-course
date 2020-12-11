"use strict";

/*****************************************
 * Activating strict mode
 */
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

/*****************************************
 * Functions
 */
/*
// Syntax
function logger() {
    console.log("My name is Pixie!");
}

// Calling/invoking/running a function
logger();
logger();
console.log(typeof logger());

// Passing data to the function and function return data
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
console.log(typeof calcAge1);
console.log(typeof calcAge2);
console.log(calcAge1());
console.log(calcAge2());

// Arrow function
const calcAge3 = birthYear => 2020 - birthYear;

const age3 = calcAge3(1991);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1980, "Bob"));
*/

// Function calling other functions
/*
function cutPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = (birthYear, firstName) => {
    const age = calcAge1(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} is already retired🎉!`);
        return -1;
    }

}

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1950, "Bob"));
*/

/********************************************
 * Arrays
 */
/*
// Intro to arrays
const friends = ["Bob", "Mary", "Sam"];
console.log(friends);

console.log(friends[0]);
console.log(friends[friends.length - 1]);

friends[1] = "John";
console.log(friends);

// Basic methods for arrays

// Add element
friends.push("D.Va");// Last
console.log(friends);

friends.unshift("Jay");// First
console.log(friends);

// Remove element
friends.pop();// Last
console.log(friends);

friends.shift();// First
console.log(friends);

// Show index position
console.log(friends.indexOf("Bob"));

// includes?
console.log(friends.includes("D.Va"));
*/

/********************************************
 * Objects
 */
/*
// Intro to objects
const jonasArray = [
    "Jonas",
    "Schemedtmann",
    46,
    "teacher",
    ["Mike", "John", "Alex"]
]
const jonas = {
    firstName: "Jonas",
    lastName: "Schemedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Mike", "John", "Alex"],
    hasDriversLicense: false,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        console.log(this);
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
    }
};
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);
// dot v.s bracket notation
console.log(jonas.getSummary());
console.log(jonas["getSummary"]());
*/

/********************************************
 * Iteration the for loop
 */
/*
// for loop keeps rnning while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
// Looping arrays, breaking and continuing

const jonas = [
    "Jonas",
    "Schemedtmann",
    46,
    "teacher",
    ["Mike", "John", "Alex"],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    // filling types array
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log(`--- BREAK WITH NUMBER---`);
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break;
    console.log(jonas[i], typeof jonas[i]);
}
*/
/*
// Looping backwards and loops in loops
const jonas = [
    "Jonas",
    "Schemedtmann",
    46,
    "teacher",
    ["Mike", "John", "Alex"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    };
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) console.log(`The loop is about to end...`);
}














































