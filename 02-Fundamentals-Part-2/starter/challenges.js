const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreKoalas, scoreDolphins);

/////////////////////////////////////////////////////
// Coding Challenge #2

const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

console.log(calcTip(100));

let bills = [125, 555, 44];
console.log(bills);
let tips = bills.map(function (bill) {
    const tip = calcTip(bill);
    return tip;
});
console.log(tips);

let total = bills.map(function (bill) {
    const total = bill + calcTip(bill);
    return total;
});
console.log(total);

/////////////////////////////////////////////////////
// Coding Challenge #3

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
};

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69
};

john.calcBMI = function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi;
};

mark.calcBMI = function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi;
};

const johnHigherBMI = john.calcBMI() > mark.calcBMI() ? true : false;

console.log(`${johnHigherBMI ? john.fullName : mark.fullName}'s BMI (${johnHigherBMI ? john.calcBMI() : mark.calcBMI()}) is higher than ${!johnHigherBMI ? john.fullName : mark.fullName}'s BMI (${!johnHigherBMI ? john.calcBMI() : mark.calcBMI()})!`);

/////////////////////////////////////////////////////
// Coding Challenge #4
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];
for (let i = 0; i < 10; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage2 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage2(totals));




































