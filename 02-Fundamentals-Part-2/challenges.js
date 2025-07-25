// Fundamentals Part 2
/* 
// Challenge #1

const calcAverage = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

// TEST DATA 1
let dolphinsScore1 = 44;
let dolphinsScore2 = 23;
let dolphinsScore3 = 71;
let koalasScore1 = 65;
let koalasScore2 = 54;
let koalasScore3 = 49;

let scoreDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
let scoreKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA 2
dolphinsScore1 = 85;
dolphinsScore2 = 54;
dolphinsScore3 = 41;
koalasScore1 = 23;
koalasScore2 = 34;
koalasScore3 = 27;

scoreDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
scoreKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA 3
dolphinsScore1 = 22;
dolphinsScore2 = 33;
dolphinsScore3 = 26;
koalasScore1 = 84;
koalasScore2 = 53;
koalasScore3 = 40;

scoreDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
scoreKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(scoreDolphins, scoreKoalas);
 */
