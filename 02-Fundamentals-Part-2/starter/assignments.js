"use strict"
// Function
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("China", 1441, "Beijing"));

// Function declaration v.s expression
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

console.log(`${percentageOfWorld1(1441)}%`);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100
};
console.log(`${percentageOfWorld2(1441)}%`);

// Arrow functions
const percentageOfWorld3 = population => population / 7900 * 100;

// Function calling other functions
const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`

console.log(describePopulation("China", 1441));

// Intro to arrays
const populations = [1441, 340, 50, 60];
console.log(populations.length == 4);
const percentages = populations.map(function (population) {
    return percentageOfWorld1(population);
});
console.log(percentages);

// Basic array operations
const neighbours = ["Russia", "Japan", "Korea"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("German")) {
    console.log(`Probably not a central European country`);
};

neighbours[neighbours.indexOf("Japan")] = "Empire of Japan";
console.log(neighbours);

// Intro to objects
const myCountry = {
    country: "China",
    capital: "Beijing",
    language: "Chinese",
    population: 1441,
    neighbours: ["Russia", "Japan", "Korea"],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital  called ${this.capital}`);
    },
};

// Dot vs. bracket notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry["population"]);

// Object methods
myCountry.describe();

myCountry.checkIsland = function () {
    this.isIsland = this.neighbours.length > 0 ? true : false;
    return this.isIsland;
}

console.log(myCountry);
myCountry.checkIsland();
console.log(myCountry);

/********************************************
 * Iteration the for loop
 */
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Voter number ${rep} is currently voting`);
}

// looping arrays, breaking and continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log("--- PERCENTAGES2 ---");
console.log(percentages2);
console.log("--- PERCENTAGES ---");
console.log(percentages);

// Looping backwards and loops in loops
const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"]
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    // if (listOfNeighbours[i].length <= 1) continue;
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]} `);
    }
}

// The while loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentages3);



































