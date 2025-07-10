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
