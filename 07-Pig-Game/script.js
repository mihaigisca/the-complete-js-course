'use strict';

// Lecture: PROJECT #3: Pig Game
// application flow chart - representation of anything that can happen in an application
// start with a raw sketch to get the big picture of the application flow
// selecting an element by class: document.querySelector('.class-name')
// selecting an element by ID, method 1: document.querySelector('#id-name') // note # is present
// selecting an element by ID, method 2: document.getElementById('id-name') // note # is missing

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

// application flow chart resembles dividing the problem into smaller ones
const scores = [0, 0];
// let currentScore0 = 0;
// let currentScore1 = 0;
let currentScore = 0;
// active player is 0-based as this will
// - help with accessing array positions more easily (e.g., scores[activePlayer])
// - allow accessing styles using string literals (e.g., .player--${activePlayer})
let activePlayer = 0;

// Lecture: Switching the Active Player
const switchPlayer = function () {
  // if (activePlayer === 0) {
  //   player0El.classList.remove('player--active');
  //   player1El.classList.add('player--active');
  // } else {
  //   player1El.classList.remove('player--active');
  //   player0El.classList.add('player--active');
  // }

  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.add('player--active');

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Lecture: Rolling The Dice
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
    // if (activePlayer === 0) {
    //   currentScore0 += dice;
    //   currentScore0El.textContent = currentScore0;
    // } else {
    //   currentScore1 += dice;
    //   currentScore1El.textContent = currentScore1;
    // }
    currentScore += dice;
    scores[activePlayer] += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    // if (activePlayer === 0) {
    //   currentScore0 = 0;
    //   currentScore0El.textContent = 0;
    // } else {
    //   currentScore1 = 0;
    //   currentScore1El.textContent = 0;
    // }

    scores[activePlayer] = 0;
    document.getElementById(`score--${activePlayer}`).textContent = 0;

    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  switchPlayer();
});
