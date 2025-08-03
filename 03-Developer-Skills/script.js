// Lecture: Installing Node.js and Setting Up a Dev Environment
// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/* 
install Prettier extension
- setting Default formatter
- setting Format on save ON

https://prettier.io/docs/configuration
https://prettier.io/docs/options

- add .prettierrc file in root folder to configure Prettier
- add following configuration options to .prettierrc
{
  "singleQuote": true,
  "arrowParens": "avoid"
}

// by default, prettier uses double quotes
// "singleQuote": true in .prettierrc replaces double quotes with single quotes
console.log('test single quotes');

// by default, prettier puts parentheses on an arrow func param
// "arrowParens": "avoi" in .prettierrc removes parentheses on arrow func param
const testArrowParens = a => a + 1;

// snippet configuration
// on mac: VSCode -> Code -> Preferences -> Configure Snippets -> New Global Snippets file -> type-in the name of the file (e.g. globalsnippets)
//
// VSCode example:
// "Print to console": {
//   "scope": "javascript,typescript",
//   "prefix": "log",
//   "body": [
//     "console.log('$1');",
//     "$2"
//   ],
//   "description": "Log output to console"
// }
//
// Simplified to:
// "Print to console": {
//   "scope": "javascript,typescript",
//   "prefix": "cl",
//   "body": ["console.log();"],
//   "description": "Log output to console"
// }
//
// now typing in cl reveals the "Print to console" suggestion that automatically replaces the cl with console.log();
console.log();
 */
/*
// Lecture: Installing Node.js and Setting Up a Dev

autoupdate of webpage on source change, two ways:
- live server extension (simpler)
-- press Go Live at the bottom right of VS Code, a browser page opens the html file

- Node.js and live server npm package (more complex, will be used in the rest of the course)
-- install from nodejs.org
-- VSCode -> Terminal -> New Terminal
-- in terminal, run following command: node -v
--- a version should be displayed
-- in terminal, run following command: npm install live-server -g
--- if a permission denied message is shown, run with sudo (add sudo at the beginning of the command)
-- in terminal, run following command: live-server
--- a browser page opens the html file (as with Go Live with live server extension)

console.log('test live update with developer console and live-server');
 */

/* 
// Lecture: Learning How to Code
How to fail at learning how to code:
- not having a clear goal
- copying code without caring how it works
- not reinforcing knowledge
- not practicing coding
- becoming frustrated quickly
- losing motivation
- learning in isolation
- not being able to build an app after finishing a couple of courses

How to succeed at learning how to code
- set a clear goal (specific, measurable, realistic, time-based, reason, what you want to build, what you need to learn)
- type and understand the code
- reinforce knowledge by applying it immediately (e.g., codewars.com)
- practice coding outside courses for your own projects, no matter how big or small
- do not get stuck with code quality
- there is much to learn so take it easy, one day at a time
- explain and share what you learn with others
- courses are only the starting point of the journey

Learning curve
- Everything is awesome
-- Study courses: understand code, take challenges and notes
- Cliff of confusion
-- Stay motivated! Keep writing lots of code on your own, no matter how bad
- Pit of despair
-- Learn with other people, devs and beginners, and share progress
-- Keep challenging yourself, run into lots of problems, and fix them
- Back to awesome
-- Round up your skillset with best practices and tool (e.g., git, testing)
- Job ready (but the learning never stops)
 */
/* 
// Lecture: How to Think Like a Developer: Become a Problem Solver!
How to fail at problem solving
- jumping in without thinking too much about it
- implementing solution in an unstructured manner
- getting stressed out when things don't work
- not researching for solutions

How to succeed at problem solving
- slow down
- stay calm
- make a plan using a logical, rational approach
- solve the problem using this 4-step framework
-- step back, ask questions (e.g., what is passed, what is expected exactly), get a clear picture, understand problem 100%
-- divide and conquer: break big problem into smaller problems (e.g., do steps 1-2-3, cover cases 1-2-3)
-- do as much research as you have to (e.g., googling how to ...)
-- for bigger problems, write pseudo-code (simple expected statements as code scenario) before writing actual code
- be curious about everything around you!
 */

// Lecture: Using Google, StackOverflow and MDN

// tools to research problems: Google, StackOverflow, MDN (Mozilla Developer Network)

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// 1.1 what is temperature amplitude? => difference between max and min temperatures
// 1.2 what is a sensor error? what to do with it? => don't do anything

// 2. Breaking into smaller, sub-problems
// 2.1 how to ignore errors?
// 2.2 fina max value in array
// 2.3 find min value in array
// 2.4 subtract min from max (amplitude) and return it

// let's research the problem
// naming function according to problem: "calculate the temperature amplitude"
// the function will take as parameter an array of temperatures: "Given an array of temperatures"
const calcTempAmplitude = function (temps) {
  // look up on google: javascript find max value in array
  // will also integrate here the min value in array
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];

    // skip iteration if current temperature is not a number (i.e., sensor error)
    if (typeof curTemp !== 'number') continue;

    if (typeof max !== 'number') max = curTemp;
    else {
      if (max < curTemp) max = curTemp;
    }

    if (typeof min !== 'number') min = curTemp;
    else {
      if (curTemp < min) min = curTemp;
    }
  }

  // test the solution for sub-problems 2.2 and 2.3
  console.log(min, max);

  // if both min and max are numbers, return the difference (i.e., amplitude)
  // otherwise return NaN as a way to tell that there are no valid values in the arrays
  if (typeof max === 'number' && typeof min === 'number') {
    return max - min;
  } else {
    return NaN;
  }
};

console.log(calcTempAmplitude(temperatures));
console.log(calcTempAmplitude(['error', 1, 3, -2, 2, 5, -3, -1, 4]));
console.log(calcTempAmplitude(['error1', 'error2', 'error3']));

// PROBLEM 2
// Function should now receive two 2 of temperatures

// 1. Understanding the problem
// 1.1 With 2 arrays, should the functionality be implemented twice? -> No, just merge the two arrays

// 2. Breaking into smaller, sub-problems
// 2.1 How to merge 2 arrays?
const calcTempAmplitude2 = function (temps1, temps2) {
  // merge two arrays using concat
  const temps = temps1.concat(temps2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (typeof max !== 'number') max = curTemp;
    else {
      if (max < curTemp) max = curTemp;
    }

    if (typeof min !== 'number') min = curTemp;
    else {
      if (curTemp < min) min = curTemp;
    }
  }

  if (typeof max === 'number' && typeof min === 'number') {
    return max - min;
  } else {
    return NaN;
  }
};

console.log(calcTempAmplitude2(temperatures, [-7, 'error', 18]));
console.log(
  calcTempAmplitude2(['error', 1, 3, -2, 2, 5, -3, -1, 4], ['error', -4, 5])
);
console.log(
  calcTempAmplitude2(
    ['error1', 'error2', 'error3'],
    ['error4', 'error5', 'error6']
  )
);
