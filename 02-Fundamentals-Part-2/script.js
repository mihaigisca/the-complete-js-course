"use strict";

/* 
// Lecture: Activating Strict Mode
// by putting "use strict"; at the beginning of the file
let hasDriversLicense = false;
const passTest = true;

// hasDriverLicense - has no s in Driver
// Without strict mode, code will consider this a variable declaration
// With strict mode, code fails as this variable was not declared
// if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive ^_^");

// With strict mode, we will not be able to use key words for naming variables
// const interface = "Audio";
// const private = 534;
 */

/* 
// Lecture: Functions
// function function_name() {
//   function body
// }
function logger() {
    console.log("My name is Mike")
}

// invoking / calling / running / executing function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    // return juice;

    return `Juice with ${apples} apples and ${oranges} oranges.`;
}

// fruitProcessor(5, 0);
// console.log(fruitProcessor(5,0));

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0,5);
console.log(orangeJuice);

const appleOrangeJuice = fruitProcessor(2,2);
console.log(appleOrangeJuice);

// DRY principle - Don't Repeat Yourself (i.e., using functions is one way to achieve that)
 */
/* 
// Lecture: Function Declarations vs. Expressions
// Function declaration
// function CAN be called before it is declared
const age1 = calcAge1(1998);
function calcAge1(birthYear) {
    return 2069 - birthYear;
}

// Function expression
// function CANNOT be called before it is declared
// This will not work:
// const age2 = calcAge2(1998);

// stored into a variable (thus is a value)
// called the same
// anonymous(?)
const calcAge2 = function (birthYear) {
    return 2069 - birthYear;
}
const age2 = calcAge2(1998);

console.log(age1, age2);
*/

/* 
// Lecture: Arrow Functions
// one parameter, one line of code
const calcAge3 = (birthYear) => 2069 - birthYear;
console.log(calcAge3(1998));

// one parameter, multiple lines of code
const yearsUntilRetirement1 = (birthYear) => {
  // const age = 2069 - birthYear;
  // const retirement = 65 - age;
  // return retirement;

  return 65 - calcAge3(birthYear);
};
console.log(`Years until retirement: ${yearsUntilRetirement1(2005)}`);

// two parameters, multiple lines of code
const yearsUntilRetirement2 = (birthYear, firstName) => {
  // const age = 2069 - birthYear;
  // const retirement = 65 - age;
  // return `${firstName} retires in ${retirement} years.`;

  return `${firstName} retires in ${65 - calcAge3(birthYear)} years.`;
};
console.log(yearsUntilRetirement2(2005, "Mike"));
console.log(yearsUntilRetirement2(2010, "Alex"));
 */

/* 
// Lecture: Functions Calling Other Functions
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
};

console.log(fruitProcessor(2, 3));
 */

/* 
// Lecture: Reviewing Functions

const calcAge = function (birthYear) {
  return 2069 - birthYear;
};

const yearsUntilRetirement1 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years.`;
  } else if (retirement < 0) {
    return `${firstName} is retired for ${-retirement} years.`;
  } else {
    return `${firstName} retired or is retiring this year.`;
  }
};

console.log(yearsUntilRetirement1(1991, "Jonas"));
console.log(yearsUntilRetirement1(2015, "Mindi"));
console.log(yearsUntilRetirement1(2004, "Mathias"));

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement2(1991, "Jonas"));
console.log(yearsUntilRetirement2(2015, "Mindi"));
console.log(yearsUntilRetirement2(2004, "Mathias"));
 */
/* 
// Lecture: Introduction to Arrays
const friend1 = "Nicu";
const friend2 = "Mircea";
const friend3 = "Dima";
const friend4 = "Artiom";

// Declaring an array using literal syntax
const friends = ["Nicu", "Mircea", "Dima", "Artiom"];
console.log(friends);

// Declaring an array using Array function
const years = new Array(1991, 2000, 2008, 2019);

// Arrays are zero-based, meaning they start counting from zero
console.log(friends[0]); // Nicu
console.log(friends[2]); // Dima

// array is an object
// objects have properties
// properties are accessed as object.property
// array has a length property - number of elements the array contains
console.log(friends.length);

// array being 0-based, the last element position is one less than array's length
console.log(friends[friends.length - 1]); // Artiom

// change/mutate array element
friends[0] = "Vadim";
console.log(friends);

// only primitive const values are immutable
// in fact, array elements can be changed, but array itself cannot be reinitialized
// friends = ["Peter", "John", "Sarah"];
// friends = new Array("Peter", "John", "Sarah");
const firstName = "Gicu";
const gicu = [firstName, "Boevicu", 2025 - 1970, "boevic", friends];
console.log(gicu, gicu.length); // 5

// from Reviewing Functions lecture
const calcAge = function (birthYear) {
  return 2069 - birthYear;
};

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
 */
/* 
// Lecture: Basic Array Operations (Methods)
const friends = ["Nicu", "Mircea", "Dima", "Artiom"];

// push - take as param the element to add to the end of the array, return updated array length
friends.push("Vadim");
console.log(friends);
// unshift - take as param the element to add to the beginning of the array, return updated array length
friends.unshift("Alex");
console.log(friends);
// pop - remove last element from the array, return removed element
const poppedFriend = friends.pop();
console.log(poppedFriend);
console.log(friends);
// shift - remove first element from the array, return removed element
const shiftedFriend = friends.shift();
console.log(shiftedFriend);
console.log(friends);
// indexOf - take as param the element to return the 0-based index of or return -1 if no such element in the array
console.log(friends.indexOf("Mircea"));
console.log(friends.indexOf("Alex"));
// includes - return true if element exists in array, false otherwise
console.log(friends.includes("Mircea"));
console.log(friends.includes("Alex"));
 */
/* 
// Lecture: Introduction to Objects
// when array has different data types
// it is not always clear what element maps to what data type
const jicuArray = [
  "Jicu",
  "Boevicu",
  2025 - 1970,
  "boevic",
  ["Nicu", "Mircea", "Dima", "Artiom"],
];

// an object is a collection of key-value pairs
// where each key is a property name
const jicu = {
  firstName: "Jicu",
  lastName: "Boevicu",
  age: 2025 - 1970,
  job: "boevic",
  friends: ["Nicu", "Mircea", "Dima", "Artiom"],
};

// Lecture: Dot vs. Bracket Notation
console.log(jicu);
console.log(jicu.firstName);
console.log(jicu["firstName"]);
const nameKey = "Name";
console.log(jicu["first" + nameKey]);

const interestedIn = prompt(
  `What do you want to know about ${jicu.firstName}? Choose between lastName, age, job and friends.`
);
if (jicu[interestedIn]) {
  console.log(jicu[interestedIn]);
} else {
  console.log("Wrong request. Choose between lastName, age, job and friends.");
}

// new properties can be added just by assigning properties that did not exist
jicu.location = "Moldova";
console.log(jicu["location"]);
jicu["favWord"] = "bratka";
console.log(jicu.favWord);

// Challenge
console.log(
  `${jicu.firstName} has ${jicu.friends.length} friends, and his best friend is called ${jicu.friends[0]}.`
);
 */
/* 
// Lecture: Object Methods
const jicu = {
  firstName: "Jicu",
  lastName: "Boevicu",
  birthYear: 2002,
  job: "boevic",
  friends: ["Nicu", "Mircea", "Dima", "Artiom"],
  hasDriversLicense: true,
  // object method can be defined as other key-value pair because the method is a property that contains a function value
  // calcAge: function (birthYear) {
  //   return 2069 - birthYear;
  // },

  // this - special keyword that allows accessing the object properties within object
  // calcAge: function () {
  //   return 2069 - this.birthYear;
  // },

  // to avoid computation each time, we could create and assign a new age property
  // and then read that one instead
  calcAge: function () {
    this.age = 2069 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old, he works as ${
      this.job
    } and has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(jicu.calcAge(jicu.birthYear));
// console.log(jicu["calcAge"](jicu.birthYear));

// console.log(jicu.calcAge());
// console.log(jicu["calcAge"]());

console.log(jicu.calcAge());
console.log(jicu.age);

// Challenge
console.log(jicu.getSummary());
 */

// Lecture: Iteration: The for Loop
// for loop keeps running while condition is true
// for loop as the following structure: for (a; b; c)
//   a - start condition (e.g., let rep = 1)
//   b - condition evaluation (e.g., rep <= 30)
//   c - action before next iteration (e.g., rep++)
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}
