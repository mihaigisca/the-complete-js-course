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
 */

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
