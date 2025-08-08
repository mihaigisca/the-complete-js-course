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
/* 
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
 */
/* 
// Lecture: Debugging (Fixing Errors)
// software bug - defect or problem (unexpected or unintended behaviour) of a computer program
// debugging - process of finding, fixing and preventing bugs
// - identify / become aware (during development, testing software, user reports during production, context, other feedback)
// - find / locate exact location (developer console, debugger)
// - fix / correct solution
// - prevent (search for same bug in similar code, write software tests)
 */
/* 
// Lecture: Debugging with the Console and Breakpoints
// Debugging with the Console
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // 3. Fix the bug by converting string to number
    // value: Number(prompt('Degrees celsius')), // commented to continue with next example
    value: 10,
  };

  // 2. Find the bug => value is returned as string
  console.table(measurement); // console.table - print object in a formatted table

  // console.log(measurement.value); // print simple message (normal color)
  // console.warn(measurement.value); // print warning message (yellow color)
  // console.error(measurement.value); // print error message (red color)

  const kelvin = measurement.value + 273;
  return kelvin;
};
// 1. Identify the bug => 10 + 273 results in 10273
console.log(measureKelvin());

// Debugging with the Breakpoints
// - go to Developer Tools
// - select Source tab
// - select script.js (which we work on right now)
// - put a breakpoint on the line assigning kelvin
// - refresh page (once value is entered, the kelvin line is reached, but not yet executed, so kelvin is undefined)
// - hovering on variables show their value
// - on the right we have tools (specific buttons and windows)
// - press the Step button to go to next line in code (kelvin is now assigned)

// Using a debugger
const calcTempAmplitudeBug = function (temps1, temps2) {
  // merge two arrays using concat
  const temps = temps1.concat(temps2);

  // Let's assume we initially thought it would be a good idea de to set min and max to 0
  // 2. Find the bug -> the min/max are initialized with 0, which are values that might not be in string and act as hardcoded limit
  // let max = 0;
  // let min = 0;

  // 3. Fix the bug -> instead of initializing  with 0, initialize to first value in array
  let max = temps[0];
  let min = temps[0];

  // add debugger; before a line to set a breakpoint and let the browser open directly the source tab at that moment of execution
  // debugger;
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (typeof max !== 'number') max = curTemp;
    else {
      if (max < curTemp) max = curTemp;
    }

    // 2. Searching for bug -> could not set 1 as the value is currently 0
    if (typeof min !== 'number') min = curTemp;
    else {
      if (curTemp < min) min = curTemp;
    }
  }

  // 2. Searching for bug -> should have been (1,9), but displays (0,9)
  console.log(min, max);

  if (typeof max === 'number' && typeof min === 'number') {
    return max - min;
  } else {
    return NaN;
  }
};
// 1. Identify the bug -> should have been 9-1 = 8, but returns 9
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
// 2. Find the bug -> min/max variables initialized with 0
// 3. Fix the bug -> min/max variables initialized with array first element
 */
/* 
// Lecture: The Rise of AI Tools (ChatGPT, Copilot, Cursor AI, etc.)
// LLM interaction
// - can provide snippets, functions and even entire files of code based on input prompts
// - use code-aware autocomplete
// - chat with codebase

// 1 Make sure you understand the problem (ask questions to get a clear picture)
// 2 Choose AI and give it a very specific prompt and enough context (topic, goal, language, style)
// 3 AI magic
// 4 Thoroughly review and test output solution
// 5 Use AI to correct or improve solution by giving it a new specific prompt
// 6 Integrate solution into app

// Before you use AI
// - know how to code on your own (fundamental skills are 100% essential)
// - know how to solve problems on your own
// - have a very critical thinking
// - have curiosity and joy while coding

// Use AI as an assistant, not replacement; to save time on repetitive tasks. It is also great for learning

// Incorporate AI code
// - when you could have written the code yourself
// - when you truly understand the generated code
// - when you ensured generated code is 100% correct
// - when you're not using generated code for app critical parts
 */
