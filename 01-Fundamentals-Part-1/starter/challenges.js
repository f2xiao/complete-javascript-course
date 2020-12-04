const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(`${markHigherBMI ? 'Mark' : 'John'}'s BMI (${markHigherBMI ? markBMI : johnBMI}) is higher than ${markHigherBMI ? 'John' : 'Mark'}'s (${markHigherBMI ? johnBMI : markBMI})`);

const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 123) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins >= 100 || averageScoreKoalas >= 100) {
    if (averageScoreDolphins > averageScoreKoalas) {
        console.log("Dolphins wins the competition");
    } else if (averageScoreDolphins === averageScoreKoalas) {
        console.log("Draw!");
    } else {
        console.log("Koalas wins the competition");
    }
} else {
    console.log("No team wins the tropy");
}

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `);
































