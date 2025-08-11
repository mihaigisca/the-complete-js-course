'use strict';

// Lecture: PROJECT #3: Pig Game
// application flow chart - representation of anything that can happen in an application
// start with a raw sketch to get the big picture of the application flow
// selecting an element by class: document.querySelector('.class-name')
// selecting an element by ID, method 1: document.querySelector('#id-name') // note # is present
// selecting an element by ID, method 2: document.getElementById('id-name') // note # is missing

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
// diceEl.style.display = 'none';
diceEl.classList.add('hidden');
