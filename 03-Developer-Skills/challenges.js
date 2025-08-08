'use strict';
/* 
// Challenge #1
// Problem
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

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
 */
/* 
// Challenge #2 (with AI)

// Problem
// Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function called analyzeWorkWeek that receives an array of daily work hours for a certain week, and returns an object with the following data:
// 1. Total hours worked
// 2. Average daily hours (rounded to one decimal place)
// 3. The day with the most hours worked (assume Monday is day 0 in the array)
// 4. Number of days worked (days with more than 0 hours)
// 5. Whether the week was full-time (worked 35 hours or more)

// TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]

// My solution
const analyzeWorkWeekOwn = function (dailyWorkHoursForAWeekArr) {
  const workWeekAnalysis = {
    totalHoursWorked: 0,
    averageDailyHours: 0,
    dayWithMostHours: '',
    numberOfDaysWorked: 0,
    fullTimeWeek: false,
    mostHoursInADay: 0,
    inputDataError: '',
  };

  let dayWithMostHoursIndex = 0;

  if (dailyWorkHoursForAWeekArr.length === 7) {
    for (let i = 0; i < dailyWorkHoursForAWeekArr.length; i++) {
      const hours = dailyWorkHoursForAWeekArr[i];

      if (typeof hours !== 'number') {
        workWeekAnalysis.inputDataError = `Data ${i} is not a number type`;
      } else if (hours === NaN) {
        workWeekAnalysis.inputDataError = `Data ${i} is not a number (NaN)`;
      } else if (hours < 0) {
        workWeekAnalysis.inputDataError = `Data ${i} is less than 0`;
      } else if (hours === 0) {
        continue;
      } else {
        workWeekAnalysis.numberOfDaysWorked++;
        workWeekAnalysis.totalHoursWorked += hours;

        if (workWeekAnalysis.mostHoursInADay < hours) {
          workWeekAnalysis.mostHoursInADay = hours;
          dayWithMostHoursIndex = i;
        }
      }
    }

    if (workWeekAnalysis.totalHoursWorked != 0) {
      workWeekAnalysis.averageDailyHours =
        Math.round((workWeekAnalysis.totalHoursWorked / 7) * 10) / 10;

      if (workWeekAnalysis.totalHoursWorked >= 35) {
        workWeekAnalysis.fullTimeWeek = true;
      }

      switch (dayWithMostHoursIndex) {
        case 0:
          workWeekAnalysis.dayWithMostHours = 'Monday';
          break;
        case 1:
          workWeekAnalysis.dayWithMostHours = 'Tuesday';
          break;
        case 2:
          workWeekAnalysis.dayWithMostHours = 'Wednesday';
          break;
        case 3:
          workWeekAnalysis.dayWithMostHours = 'Thursday';
          break;
        case 4:
          workWeekAnalysis.dayWithMostHours = 'Friday';
          break;
        case 5:
          workWeekAnalysis.dayWithMostHours = 'Saturday';
          break;
        case 6:
          workWeekAnalysis.dayWithMostHours = 'Sunday';
          break;
      }
    }
  } else {
    workWeekAnalysis.inputDataError = 'Array length is not 7';
  }

  return workWeekAnalysis;
};

console.log(analyzeWorkWeekOwn([7.5, 8, 6.5, 0, 8.5, 4, 0]));

// AI solution
function analyzeWorkWeek(hoursArray) {
  if (!Array.isArray(hoursArray) || hoursArray.length !== 7) {
    throw new Error(
      'Input must be an array of 7 numbers (hours worked each day).'
    );
  }

  const totalHours = hoursArray.reduce((sum, h) => sum + h, 0);
  const averageHours = Number((totalHours / 7).toFixed(1));

  const maxHours = Math.max(...hoursArray);
  const maxDayIndex = hoursArray.indexOf(maxHours);

  const daysWorked = hoursArray.filter(h => h > 0).length;
  const isFullTime = totalHours >= 35;

  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return {
    totalHours,
    averageHours,
    mostHoursDay: dayNames[maxDayIndex],
    daysWorked,
    isFullTime,
  };
}

console.log(analyzeWorkWeek([7.5, 8, 6.5, 0, 8.5, 4, 0]));
 */
