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
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
// diceEl.style.display = 'none';
diceEl.classList.add('hidden');

// Lecture: Rolling the Dice
// application flow chart resembles dividing the problem into smaller ones
let currentScore0 = 0;
let currentScore1 = 0;

btnRoll.addEventListener('click', function () {
  // generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  // switch (dice) {
  //   case 1:
  //     diceEl.src = 'dice-1.png';
  //     break;
  //   case 2:
  //     diceEl.src = 'dice-2.png';
  //     break;
  //   case 3:
  //     diceEl.src = 'dice-3.png';
  //     break;
  //   case 4:
  //     diceEl.src = 'dice-4.png';
  //     break;
  //   case 5:
  //     diceEl.src = 'dice-5.png';
  //     break;
  //   case 6:
  //     diceEl.src = 'dice-6.png';
  //     break;
  // }
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  // check for roll 1: if true, switch to next player
  if (dice !== 1) {
    // add dice to current score
    currentScore0 += dice;
    currentScore0El.textContent = currentScore0;
  } else {
    // switch to next player
  }
});
