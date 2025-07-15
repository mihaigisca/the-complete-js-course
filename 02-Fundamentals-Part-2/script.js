"use strict";

// Lecture: Activating Strict Mode
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