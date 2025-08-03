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
