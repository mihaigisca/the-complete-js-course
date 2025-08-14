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

// application flow chart resembles dividing the problem into smaller ones
// active player is 0-based as this will
// - help with accessing array positions more easily (e.g., scores[activePlayer])
// - allow accessing styles using string literals (e.g., .player--${activePlayer})

// scope - variables are visible only in the block they are defined
// declare variables, but set in init
let scores, currentScore, activePlayer, playing;

// Lecture: Resetting the Game
// define init function and immediately execute it
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  // When there is an element that contains a specific class, it is safe to remove it from both
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};
init();

// Lecture: Switching the Active Player
// Note: implemented before watching Holding Current Score lecture
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Lecture: Rolling The Dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    // check for roll 1: if true, switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      scores[activePlayer] = 0;
      document.getElementById(`score--${activePlayer}`).textContent = 0;

      // Note: implemented before watching Holding Current Score lecture
      switchPlayer();
    }
  }
});

// Lecture: Holding Current Score
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] > 20) {
      playing = false;

      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Note: implemented before watching Holding Current Score lecture
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
