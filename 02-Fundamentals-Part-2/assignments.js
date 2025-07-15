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

// Lecture: Function Declarations vs. Expressions
function percentageOfWorld1(populationInMillions) {
    return populationInMillions * 100.0 / 7900;
}

console.log(`China population is about ${percentageOfWorld1(1411)}% of the world population.`);
console.log(`Republic of Moldova population is about ${percentageOfWorld1(2.458)}% of the world population.`);
console.log(`Brazil population is about ${percentageOfWorld1(211.1)}% of the world population.`);

const percentageOfWorld2 = function(populationInMillions) {
    return populationInMillions * 100.0 / 7900;
}

console.log(`India population is about ${percentageOfWorld2(1438)}% of the world population.`);
console.log(`Japan population is about ${percentageOfWorld2(124.5)}% of the world population.`);
console.log(`Europe population is about ${percentageOfWorld2(742.3)}% of the world population.`);
console.log(`Africa population is about ${percentageOfWorld2(1373)}% of the world population.`);
console.log(`Asia population is about ${percentageOfWorld2(4694.6)}% of the world population.`);
console.log(`North America population is about ${percentageOfWorld2(528.7)}% of the world population.`);
console.log(`South America population is about ${percentageOfWorld2(442)}% of the world population.`);
console.log(`Australia population is about ${percentageOfWorld2(26.6)}% of the world population.`);