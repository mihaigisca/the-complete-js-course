// Fundamentals Part 2
/* 
// Challenge #1

const calcAverage = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

// TEST DATA 1
let dolphinsScore1 = 44;
let dolphinsScore2 = 23;
let dolphinsScore3 = 71;
let koalasScore1 = 65;
let koalasScore2 = 54;
let koalasScore3 = 49;

let scoreDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
let scoreKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA 2
dolphinsScore1 = 85;
dolphinsScore2 = 54;
dolphinsScore3 = 41;
koalasScore1 = 23;
koalasScore2 = 34;
koalasScore3 = 27;

scoreDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
scoreKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA 3
dolphinsScore1 = 22;
dolphinsScore2 = 33;
dolphinsScore3 = 26;
koalasScore1 = 84;
koalasScore2 = 53;
koalasScore3 = 40;

scoreDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
scoreKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(scoreDolphins, scoreKoalas);
 */
/* 
// Challenge #2
const calcTip = function (bill) {
  let tip = 0;

  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }

  return tip;
};

console.log(`Tip for a bill value of 100: ${calcTip(100)}`);
console.log(`Tip for a bill value of 10: ${calcTip(10)}`);
console.log(`Tip for a bill value of 1000: ${calcTip(1000)}`);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`${bills}
${tips}
${totals}`);
 */

// Challenge #3
const mark = {
  // firstName: "Mark",
  // lastName: "Miller",
  // fullName: `${this.firstName} ${this.lastName}`,
  // fullName: () => { return `${this.firstName} ${this.lastName}` },
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  // firstName: "John",
  // lastName: "Smith",
  // fullName: `${this.firstName} ${this.lastName}`,
  // fullName: () => { return `${this.firstName} ${this.lastName}` },
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI and ${john.fullName}'s are the same (${mark.bmi})!!!`
  );
}
