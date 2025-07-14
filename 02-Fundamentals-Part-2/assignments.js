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

