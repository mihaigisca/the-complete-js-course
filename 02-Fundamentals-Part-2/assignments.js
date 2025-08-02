// Fundamentals Part 2
/* 
// Lecture: Functions
function describeCountry(country, populationInMillions, capitalCity) {
    return `${country} has ${populationInMillions} people and its capital city is ${capitalCity}.`;
}

const moldovaDescription = describeCountry("Republic of Moldova", 2.458, "Chișinău");
console.log(moldovaDescription);

const romaniaDescription = describeCountry("România", 19.06, "București");
console.log(romaniaDescription);

const usaDescription = describeCountry("USA", 340.1, "Washington DC");
console.log(usaDescription);
 */
/* 
// Lecture: Function Declarations vs. Expressions
function percentageOfWorld1(populationInMillions) {
  return (populationInMillions * 100.0) / 7900;
}

console.log(
  `China population is about ${percentageOfWorld1(
    1411
  )}% of the world population.`
);
console.log(
  `Republic of Moldova population is about ${percentageOfWorld1(
    2.458
  )}% of the world population.`
);
console.log(
  `Brazil population is about ${percentageOfWorld1(
    211.1
  )}% of the world population.`
);

const percentageOfWorld2 = function (populationInMillions) {
  return (populationInMillions * 100.0) / 7900;
};

console.log(
  `India population is about ${percentageOfWorld2(
    1438
  )}% of the world population.`
);
console.log(
  `Japan population is about ${percentageOfWorld2(
    124.5
  )}% of the world population.`
);
console.log(
  `Europe population is about ${percentageOfWorld2(
    742.3
  )}% of the world population.`
);
console.log(
  `Africa population is about ${percentageOfWorld2(
    1373
  )}% of the world population.`
);
console.log(
  `Asia population is about ${percentageOfWorld2(
    4694.6
  )}% of the world population.`
);
console.log(
  `North America population is about ${percentageOfWorld2(
    528.7
  )}% of the world population.`
);
console.log(
  `South America population is about ${percentageOfWorld2(
    442
  )}% of the world population.`
);
console.log(
  `Australia population is about ${percentageOfWorld2(
    26.6
  )}% of the world population.`
);

// Lecture: Arrow Functions
const percentageOfWorld3 = populationInMillions => populationInMillions * 100.0 / 7900;
console.log(`România population is about ${percentageOfWorld3(19.06)}% of the world population.`);
console.log(`Russian Federation population is about ${percentageOfWorld3(143.8)}% of the world population.`);
console.log(`North Korea population is about ${percentageOfWorld3(26.42)}% of the world population.`);

// Lecture: Functions Calling Other Functions
const describePopulation = function (country, populationInMillions) {
  const percentageOfWorld = percentageOfWorld1(populationInMillions);

  return `Population of ${country} is about ${percentageOfWorld}% of the world population.`;
};

console.log(describePopulation("Republic of Moldova", 2.458));
 */
/* 
// Lecture: Introduction to Arrays
const populationsInMillions = [2.458, 19.06, 340.1, 1411];
console.log(`Populations: ${populationsInMillions}`);

const checkLength = 4;
console.log(
  `Array has ${checkLength} elements: ${
    populationsInMillions.length === checkLength
  }`
);

// from Function Declarations vs. Expressions lecture
function percentageOfWorld1(populationInMillions) {
  return (populationInMillions * 100.0) / 7900;
}

const percentagesOfWorld = [
  percentageOfWorld1(populationsInMillions[0]),
  percentageOfWorld1(populationsInMillions[1]),
  percentageOfWorld1(populationsInMillions[populationsInMillions.length - 2]),
  percentageOfWorld1(populationsInMillions[populationsInMillions.length - 1]),
];
console.log(`Population percentages: ${percentagesOfWorld}`);
 */
/* 
// Lecture: Basic Array Operations (Methods)
const neighbours = ["Ukraine", "Bulgaria", "Moldova", "Serbia", "Hungary"];
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}
neighbours[neighbours.indexOf("Moldova")] = "Republic of Moldova";
console.log(neighbours);
 */
/* 
// Lecture: Introduction to Objects
const myCountry = {
  country: "Republic of Moldova",
  capital: "Chișinău",
  language: "Romanian",
  population: 2.548,
  neighbours: ["Romania", "Ukraine"],
};

// Lecture: Dot vs. Bracket Notation
myCountry.population += 2;
myCountry["population"] -= 2;
console.log(
  `${myCountry.country} has ${myCountry.population} million people (not all of them speak ${myCountry.language}), ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

// Lecture: Object Methods
myCountry.describe = function () {
  return `${this.country} has ${this.population} million people (not all of them speak ${this.language}), ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
};
console.log(myCountry.describe());

myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0 ? true : false;
  return this.isIsland;
};
 */
/* 
// Lecture: Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}
 */
/* 
// Lecture: Looping Arrays, Breaking and Continuing
const percentages2 = [];

// from Introduction to Arrays lecture
const populationsInMillions = [2.458, 19.06, 340.1, 1411];

// from Function Declarations vs. Expressions lecture
function percentageOfWorld1(populationInMillions) {
  return (populationInMillions * 100.0) / 7900;
}

// from Introduction to Arrays lecture
const percentagesOfWorld = [
  percentageOfWorld1(populationsInMillions[0]),
  percentageOfWorld1(populationsInMillions[1]),
  percentageOfWorld1(populationsInMillions[populationsInMillions.length - 2]),
  percentageOfWorld1(populationsInMillions[populationsInMillions.length - 1]),
];

for (let i = 0; i < populationsInMillions.length; i++) {
  percentages2.push(percentageOfWorld1(populationsInMillions[i]));
}

console.log(`${percentagesOfWorld}
${percentages2}`);
 */

// Lecture: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

// implementation that first comes to mind
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
console.log("---");
// implementation that I think a beginner is expected to provide
for (let i = 0; i < listOfNeighbours.length; i++) {
  let neighboursList = listOfNeighbours[i];

  for (let j = 0; j < neighboursList.length; j++) {
    console.log(`Neighbour: ${neighboursList[j]}`);
  }
}
