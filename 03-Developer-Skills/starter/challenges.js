"use strict";
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into sring
// - Transform each element to string with ºC
// - Strings needs to contain day (index+1)
// - Add .. between elements and start and end of string
// - log string to the console

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let forecastString = ``;
  for (let i = 0; i < arr.length; i++) {
    forecastString += `...${arr[i]}ºC in ${i + 1} days`;
  }
  console.log(forecastString + `...`);
};

printForecast(temp1);
printForecast(temp2);
