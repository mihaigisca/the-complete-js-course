/* 
// Lecture: Values and Variables
let js = "amazing";
console.log(30 + 20 + 15 + 5 - 1);

console.log("Mihai");
console.log(29);

// variable - box that stores value
// javascript convention - camel case: first word lower case, next words upper case
// there are words reserved by javascript that cannot be used as variable name (e.g., new, function)
// name of variable can only contain letters, digits, underscore and dollar sign
// name of variable cannot start with digit
let firstName = "Mihai";
console.log(firstName);
 */

/* 
// Lecture: Data Types
let piName = "PI";
let piValue = 3.14;
let isPi = true;
if (isPi) {
  console.log(
    piName +
      " (" +
      typeof piName +
      ")" +
      ": " +
      piValue +
      " (" +
      typeof piValue +
      ")"
  );
}

// Dynamic typing example:
// changing the value type during variable reassignment
// initially was number, now it is string
piValue = "3.14";
if (isPi) {
  console.log(
    piName +
      " (" +
      typeof piName +
      ")" +
      ": " +
      piValue +
      " (" +
      typeof piValue +
      ")"
  );
}

// Undefined variable
let year;
console.log(year + " (" + typeof year + ")");
// Define variable
year = 2025;
console.log(year + " (" + typeof year + ")");

// Bug: typeof null returns object, which has no sense,
// the bug is maintained for legacy reasons
console.log(null + " (" + typeof null + ")");
 */

/* 
// Lecture: let, const and var
let age = 68;
age = 69;

const yearOfBirth = 1969;

// Note: error occurs if const variable is not defined at declaration or
// there is an attempt to change it dynamically
// const dayOfBirth;
// yearOfBirth = 1970;

// Tip: use const by default;
// change it to let only when you are sure that the variable will change

// Avoid declaring variables using var
var job = "programmer";
job = "investor";

// Avoid declaring variables without let (even if it works)
lastName = "Chikibriki";
console.log(lastName);
 */

/* 
// Lecture: Basic Operators
// Math operators
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2001;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);
// 2 ** 3 <=> 2^3 <=> 2*2*2

const firstName = "Chiki";
const lastName = "Briki";
console.log(firstName, lastName);
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// Assignment operators
// x += 5 <=> x = x + 5
const plusOperator = 10 + 5;
console.log("Plus operator: " + plusOperator);
let plusEqualOperator = 10;
plusEqualOperator += 5;
console.log("Plus-equal operator: " + plusEqualOperator);

const minusOperator = 10 - 5;
console.log("Minus operator: " + minusOperator);
let minusEqualOperator = 10;
minusEqualOperator -= 5;
console.log("Minus-equal operator: " + minusEqualOperator);

const multiplicationOperator = 10 * 5;
console.log("Multiplication operator: " + multiplicationOperator);
let multiplicationEqualOperator = 10;
multiplicationEqualOperator *= 5;
console.log("Multiplication-equal operator: " + multiplicationEqualOperator);

const divisionOperator = 10 / 5;
console.log("Division operator: " + divisionOperator);
let divisionEqualOperator = 10;
divisionEqualOperator /= 5;
console.log("Division-equal operator: " + divisionEqualOperator);

let increment = 5;
console.log("Value before incrementing: " + increment);
increment++;
console.log("Value after incrementing: " + increment);
console.log("Value before decrementing: " + increment);
increment--;
console.log("Value after decrementing: " + increment);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
 */

/* 
// Lecture: Operator Precedence
// MDN resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2001;

// In the attached resource, there is a table of operators' precedence
// In that table, we can see that the subtraction (minus) operator has a higher precedence than greater than (>) operator.
// This is why the subtractions are performed firstly, and only then the comparison
console.log(currentYear - 1991 > currentYear - 2001);

let x, y;
x = y = 1 + 5 * 2; // 5 * 2 = 10 --> 10 + 1 = 11 --> y = 11 --> x = y
console.log(x, y);

console.log("Ages: ", ageJonas, ageSarah);
const averageAgeWithoutParenthesis = ageJonas + ageSarah / 2;
console.log(
  "Average age without using parenthesis (a+b/2): " +
    averageAgeWithoutParenthesis
);
const averageAgeWithParenthesis = (ageJonas + ageSarah) / 2;
console.log(
  "Average age using parenthesis [(a+b)/2]: " + averageAgeWithParenthesis
);
 */
