// Fundamentals Part 1

/*
// Lecture: Values and Variables
const country = "Republic of Moldova";
const continent = "Europe";
let population = 2.458;
// console.log("Country: " + country);
// console.log("Continent: " + continent);
// console.log("Population (in millions): " + population);

// Lecture: Data Types
const isIsland = false;
let language;
console.log("Country: " + country + " (" + typeof country + ")");
console.log("Continent: " + continent + " (" + typeof continent + ")");
console.log(
  "Population (in millions): " + population + " (" + typeof population + ")"
);
console.log("Is island: " + isIsland + " (" + typeof isIsland + ")");
console.log("Language: " + language + " (" + typeof language + ")");

// Lecture: let, const and var
language = "Romanian";
console.log("Language: " + language + " (" + typeof language + ")");
// changed following variables from let to const: country, continent, isIsland

// const variable cannot be changed: developer tools console error
// country = "RSSM";

// Lecture: Basic Operators
console.log("Halved population (in millions): " + population / 2);
let populationOfFinlandInMillions = 6.0;
let averagePopulationOfACountryInMillions = 33.0;

// doing this as directly adding 0.000001 results in 2.458001000003
let tempPopulation = population;
tempPopulation *= 10 ** 6;
tempPopulation++;
tempPopulation /= 1000000;

console.log("Incremented population: " + tempPopulation);
console.log(
  "Does " +
    country +
    " have a bigger population than the population of Finland (which is " +
    populationOfFinlandInMillions +
    " million people)? Answer: " +
    (population > populationOfFinlandInMillions)
);
console.log(
  "Does " +
    country +
    " have a smaller population than the average population of a country (which is " +
    averagePopulationOfACountryInMillions +
    " million people)? Answer: " +
    (population < averagePopulationOfACountryInMillions)
);

console.log(
  country +
    " is in " +
    continent +
    ", but not all of its " +
    population +
    " million people speak " +
    language +
    ". Ask Russian Federation why."
);

// Lecture: String and Template Literals
console.log(
  `${country} is in ${continent}, but not all of its ${population} million people speak ${language}. Ask Russian Federation why.`
);

// Lecture: Taking Decisions: if / else Statements
if (population > averagePopulationOfACountryInMillions) {
  console.log(
    `The population of ${country} is ${
      population - averagePopulationOfACountryInMillions
    } above average.`
  );
} else {
  console.log(
    `The population of ${country} is ${
      averagePopulationOfACountryInMillions - population
    } below average.`
  );
}
*/

/* 
// Lecture: Type Conversion and Coercion
console.log("9" - "5"); // -> 9 - 5 --> 4
console.log("19" - "13" + "17"); // -> 19 - 13 --> 6 + "17" --> "617"
console.log("19" - "13" + 17); // -> 19 - 13 --> 6 + 17 --> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 5 + 6 --> 11 + "4" --> "114" + 9 --> "1149" - 4 --> 1145 - 2 --> 1143
 */

/* 
// Lecture: Equality Operators: == vs. ===
// this returns a string
// const numNeighbours = prompt(
//   "How many neighbour countries does your contry have?"
// );

// loose equality operator converts string to number, thus "1" equals 1
// if (numNeighbours == 1) {
//   console.log("Only 1 border!");
// } else {
//   console.log("No borders");
// }

// strict equality operator does not make conversion, thus "1" does not equal 1
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else {
//   console.log("No borders");
// }

// this returns a number (NaN if failed to convert string to number)
const numNeighbours = Number(
  prompt("How many neighbour countries does your contry have?")
);

if (numNeighbours === NaN) {
  console.log("Something went wrong!");
} else if (numNeighbours < 0) {
  console.log("Silly, there cannot be negative borders ;)");
} else if (numNeighbours % 1 > 0) {
  console.log("Silly, there cannot be decimal borders ;)");
} else if (numNeighbours === 0) {
  console.log("No borders");
} else if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else {
  console.log("More than one border!");
}
 */
