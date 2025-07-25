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
