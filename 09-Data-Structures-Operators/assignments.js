'use strict';

// Assignment: Destructuring Arrays
const books = [
  'Amintiri din Copilarie',
  'The Power of Now',
  'The 48 Laws Of Power',
];
const [firstBook, secondBook] = books;
const [, , thirdBook] = books;
console.log(firstBook, secondBook, thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars;
