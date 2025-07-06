// Lecture: Values and Variables
let country = "Republic of Moldova";
let continent = "Europe";
let population = 2.458;
// console.log("Country: " + country);
// console.log("Continent: " + continent);
// console.log("Population (in millions): " + population);

// Lecture: Data Types

let isIsland = false;
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
