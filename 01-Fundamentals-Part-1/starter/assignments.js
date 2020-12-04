/*****************************
 *  Values and variables
 */

const country = "China";
const continent = "Asia";
let population = 139.3; // in million

console.log(country, continent, population);

/*****************************
 *  Data types
 */
const isIsland = false;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language);

/*****************************
 *  Let, const and var
 */

language = "Mandarin";

/*****************************
 *  Basic operators
 */

const halfPopulation = population / 2;
population++;
console.log(population);
population--;

let populationInFinland = 6;
const morePopulationThanFinland = population > populationInFinland;
console.log(morePopulationThanFinland);

let averagePopulation = 33;
const morePopulationThanAverage = population > averagePopulation;
console.log(morePopulationThanAverage);

/*****************************
 *  Strings and template literals
 */

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

/*****************************
 *  Taking decisions: if/else statements
 */

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} below average`);
}

/*****************************
 *  Type conversion and coercion
 */

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

/*****************************
 *  Equality operators: == vs. ===
 */
/*
const numNeighbours = Number(prompt("How many neighbour countries does your country have ? "));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else {
    console.log("More than 1 border");
}
*/

/*****************************
 *  Logical operators
 */

if (language === "English" && population < 50) {
    console.log(`You should live in ${country} :).`);
} else {
    console.log(`${country} does not meet your criteria :(.`);
}

/*****************************
 *  The switch statement
 */

switch (language) {
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speaker!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}

/*****************************
 *  The conditional (ternary) operator
 */

// population > 33 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`);










