// Fundamentals Part 1
/* 
// Challenge #1

// Body Mass Index formula:
// BMI = mass / (height * height), where
// - mass in kg
// - height in meters

let massMark, heightMark, massJohn, heightJohn, BMIMark, BMIJohn, markHigherBMI;

console.log("TEST DATA 1");
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

console.log(
  "Mark weighs " + massMark + " kg and is " + heightMark + " m tall."
);
console.log(
  "John weighs " + massJohn + " kg and is " + heightJohn + " m tall."
);

BMIMark = massMark / (heightMark * heightMark);
// BMIJohn = massJohn * (heightJohn ** 2);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("Mark's BMI: " + BMIMark);
console.log("John's BMI: " + BMIJohn);
console.log("Is Mark's BMI higher than John's BMI: ", BMIMark > BMIJohn);

console.log("TEST DATA 2");
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

console.log(
  "Mark weighs " + massMark + " kg and is " + heightMark + " m tall."
);
console.log(
  "John weighs " + massJohn + " kg and is " + heightJohn + " m tall."
);

BMIMark = massMark / (heightMark * heightMark);
// BMIJohn = massJohn * (heightJohn ** 2);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("Mark's BMI: " + BMIMark);
console.log("John's BMI: " + BMIJohn);
console.log("Is Mark's BMI higher than John's BMI: ", BMIMark > BMIJohn);
*/

/*
// Challenge #2

// Use if-else statements, simple strings and template literals
// to nicely output the BMI comparison results

console.log("TEST DATA 1");
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("Mark's BMI: " + BMIMark);
console.log("John's BMI: " + BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

console.log("TEST DATA 2");
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("Mark's BMI: " + BMIMark);
console.log("John's BMI: " + BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
 */

// Challenge #3
console.log("TEST DATA 1");
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(
  `Dolphins average score --> ${scoreDolphins} vs. ${scoreKoalas} <-- Koalas average score`
);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}

console.log("TEST DATA 2");
scoreDolphins = (94 + 106 + 87) / 3;
scoreKoalas = (88 + 91 + 110) / 3;
console.log(
  `Dolphins average score --> ${scoreDolphins} vs. ${scoreKoalas} <-- Koalas average score`
);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}

console.log("TEST DATA 3");
scoreDolphins = (97 + 108 + 100) / 3;
scoreKoalas = (93 + 97 + 115) / 3;
console.log(
  `Dolphins average score --> ${scoreDolphins} vs. ${scoreKoalas} <-- Koalas average score`
);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}

console.log("TEST DATA 4");
scoreDolphins = (95 + 106 + 88) / 3;
scoreKoalas = (88 + 91 + 110) / 3;
console.log(
  `Dolphins average score --> ${scoreDolphins} vs. ${scoreKoalas} <-- Koalas average score`
);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}
