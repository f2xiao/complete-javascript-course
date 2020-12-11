// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const xyzabcd = 23;

const calcAge = birthYear => 2037 - birthYear;
console.log(xyzabcd);

const temperatures = [3 - 2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;
    if (max < currTemp) max = currTemp;
    if (min > currTemp) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const array1 = ["a", "b", "c"];
const array2 = ["e", "f", "g"];
const array3 = array1.concat(array2);
console.log(array3);
*/

// Debug with console and breakpoints
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) FIX
    // value: Number(prompt("Degrees in celsuis")),
    value: 10,
  };

  // B) FIND
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;

    if (max < currTemp) max = currTemp;
    if (min > currTemp) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

// A) IDENTIFY
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
