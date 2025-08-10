'use strict';

// Lecture: PROJECT #1: Guess My Number!
// console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

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

// Lecture: Selecting and Manipulating Elements
// Set elements via DOM
document.querySelector('.message').textContent =
  'Invarteste, Doamne 😶‍🌫️, roata ☸️!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '❓';
document.querySelector('.score').textContent = '69';

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
