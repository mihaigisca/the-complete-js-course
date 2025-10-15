'use strict';

// Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// // const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...playerNames) {
//   let goalCount = 0;
//   for (let i = 0; i < playerNames.length; i++) {
//     for (let j = 0; j < game.scored.length; j++) {
//       if (playerNames[i] === game.scored[j]) goalCount++;
//     }
//   }
//   console.log(`${playerNames}. Goals scored: ${goalCount}.`);

//   //   console.log(`${playerNames}. Goals scored: ${playerNames.length}.`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Lewandowski', 'Gnarby', 'Hummels');

// // 7.
// // (team1 < team2) is truthy, so && continues to next operation
// team1 < team2 && console.log(`${game.team1} is more likely to win`);

// // (team1 > team2) is falsey, so && stops
// team1 > team2 && console.log(`${game.team2} is more likely to win`);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1.
// for (const [index, name] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${name}`);
// }

// // 2.
// // let averageOdd = 0;
// // for (const odd of Object.values(game.odds)) {
// //   averageOdd += odd;
// // }
// // console.log(`Average odd: ${(averageOdd /= Object.values(game.odds).length)}`);

// const odds = Object.values(game.odds);
// let averageOdd = 0;
// for (const odd of odds) {
//   averageOdd += odd;
// }
// console.log(`Average odd: ${(averageOdd /= odds.length)}`);

// // 3.
// // for (const key of Object.keys(game.odds)) {
// //   console.log(`Odd of victory ${game[key]}: ${game.odds[key]}`);
// // }

// // for (const entry of Object.entries(game.odds)) {
// //   console.log(`Odd of victory ${game[entry[0]]}: ${entry[1]}`);
// // }

// // for (const [team, odd] of Object.entries(game.odds)) {
// //   if (team === 'x') {
// //     console.log(`Odd of draw: ${odd}`);
// //   } else {
// //     console.log(`Odd of victory ${game[team]}: ${odd}`);
// //   }
// // }

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// // Bonus.
// const scorers = {};
// for (const scorer of game.scored.values()) {
//   if (scorers[scorer] === undefined) {
//     scorers[scorer] = 1;
//   } else {
//     scorers[scorer] += 1;
//   }
// }
// console.log(scorers);
