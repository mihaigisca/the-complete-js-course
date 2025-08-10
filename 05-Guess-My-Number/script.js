'use strict';
/* 
// Lecture: PROJECT #1: Guess My Number!
// console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
 */
/* 
// Lecture: What's the DOM and DOM Manipulation
// Document Object Model (DOM) - structured representation of HTML documents that allows JS to access and manipulate HTML elements and styles.
// DOM - complete respresentation of HTML document.
// DOM has a tree structure called DOM tree.
// Document - <html> - <head> - <title> - text
//         |- <body> - <section> - <p> - text
//                  |           |- <p> - text
//                  |           |- <a>
//                  |- <section> - <img>
//
// DOM is not JS
// - JS is implementation of ECMA rules
// - DOM and DOM methods are part of web APIs
// - DOM and JS can interact
 */
/* ß
// Lecture: Selecting and Manipulating Elements
// Set elements via DOM
document.querySelector('.message').textContent =
  'Invarteste, Doamne 😶‍🌫️, roata ☸️!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '❓';
document.querySelector('.score').textContent = '69';

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
 */

// Lecture: Handling Click Events
// event - something that happens on the page
// eventListener - object monitoring a specific event (e.g., mouse moving, key press)
// eventHandler - function that does something when an event occurred
// Example of using eventListener with button
// - select button
// - addEventListener providing the
//   > event type (click)
//   > eventHandler function

// Lecture:  Implementing the Game Logic
const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let secretNumber = generateSecretNumber();

// data is part of application state when it is relevant for proper app functioning
// such data has to be in the code and not in the DOM
let score = 20;

// Lecture: Manipulating CSS Styles
const playerWinsScenario = function () {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = '🏆 Correct Number!';

  // Set styles via DOM
  // get the element and access its style property
  // the values must be set as strings
  document.querySelector('body').style.backgroundColor = '#60b347';
  // double of the default in index.html
  document.querySelector('.number').style.width = '30rem';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // No input scenario
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (score > 0) {
    // Win scenario
    if (guess === secretNumber) {
      playerWinsScenario();

      // Too high scenario
    } else if (guess > secretNumber) {
      document.querySelector('.score').textContent = --score;
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too High!';
      }

      // Too low scenario
    } else if (guess < secretNumber) {
      document.querySelector('.score').textContent = --score;
      if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too Low!';
      }
    }

    if (score === 0) {
      document.querySelector('.message').textContent = '🤣 You Lost the Game!';
    }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  secretNumber = generateSecretNumber();

  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';
});
