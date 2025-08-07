// Challenge #1

/* Problem
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
 */

// 1. Understanding the problem
// 1.1 Create a single long string by adding through iterating an array -> how to concatenate strings?
// 1.2 What happens if there is a non-number element in the array? skip
// 1.3 Do we display trailing dots if there are no valid values in array? -> no

// 2. Breakup problem into sub-problems
// 2.1 Initialize final string as empty ('')
// 2.2 Iterate through array - use (+=) operator on final string to add "... 17ºC in 1 days " format string
// 2.2.1 Set days as i+1 because i is zero-based
// 2.3 Do nothing in iteration if iterated array value is not a number
// 2.4 Add trailing dots to final string using (+=) operator

const printForecast = function (arr) {
  let forecastedString = '';

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      forecastedString += `... ${Number(arr[i])}ºC in ${i + 1} days `;
    }
  }

  if (forecastedString !== '') {
    forecastedString += '...';
  }

  console.log(forecastedString);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
