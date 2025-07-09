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

/* 
// Lecture: Strings and Template Literals
const firstName = "Arnold";
const job = "actor";
const birthYear = 1947;
const currentYear = 2025;

const arnold =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " year-old " +
  job +
  "! I'll be back!";
console.log(arnold);

const arnoldTemplateLiterals = `I'm ${firstName}, a ${
  currentYear - birthYear
} year-old ${job}!`;
console.log(arnoldTemplateLiterals);
// `` can be used for regular and multi-line strings.
console.log(`Told you
I'll be back!
Yodelayheehoo!`);
 */

/* 
// Lecture: Taking Decisions: if / else Statements
// if-else statement is a control structure

let sarahAge = 19;
// const isOldEnough = sarahAge >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving license 🚗");
// }

if (sarahAge >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  console.log(`Sarah is too young. Wait another ${18 - sarahAge} years.`);
}

sarahAge = 15;

if (sarahAge >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  console.log(`Sarah is too young. Wait another ${18 - sarahAge} years.`);
}

let birthYear = 1995;
let century;

if (birthYear < 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

birthYear = 2012;

if (birthYear < 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
 */

/*
// Lecture: Type Conversion and Coercion
// Type conversion (manual conversion)
const year = "1991"; // string declaration
console.log(year + 18); // string concatenation
console.log(year, Number(year)); // convert string to number without changing the variable itself
console.log(Number(year) + 18); // adding of two numbers

// attempting to convert a string that is not a number to a number will result in NaN (Not a Number)
console.log(Number("This is not a number"));
console.log(typeof NaN); // results in number, which means that NaN is an invalid number

console.log(String(23), 23);

// Type coercion (js behind-the-scenes conversion)
// whenever there is a "+" between string and number, number is converted to string.
console.log("I am " + 23 + " years old.");
// whenever there is a "-, * or /" between string and number, string is converted to number.
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

console.log("1" + 1 - 1); // "1" + 1 --> "11" - 1 --> 10
console.log(2 + 3 + 4 + "5"); // 2 + 3 + 4 --> 9 + "5" --> "95"
console.log("10" - "4" - "3" - 2 + "5"); // 10 - 4 --> 6 - 3 --> 3 - 2 --> 1 + "5" --> "15"
 */
/* 
// Lecture: Truthy and Falsy Values
// falsy values - values that will convert to false when converting them to boolean
// 5 falsy values: 0, "", undefiend, null, NaN
console.log(`Converting falsy values to boolean
0: ${Boolean(0)},
empty string: ${Boolean("")},
undefined: ${Boolean(undefined)},
null: ${Boolean(null)},
NaN: ${Boolean(NaN)}`);

// Boolean coercion is performed when using
// - logical contexts (e.g., if-else condition)
// - logical operators (next lecture)
let money = 0;
if (money) {
  console.log("Don't spend them all!");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Height is surely defined!");
} else {
  console.log("Height is not defined in this case!");
}

console.log(`Converting truthy values to boolean
1: ${Boolean(1)},
non-empty string: ${Boolean("Truthy")},
object: ${Boolean({})}`);

money = 1;
if (money) {
  console.log("Don't spend them all!");
} else {
  console.log("You should get a job!");
}
*/

/* 
// Lecture: Equality Operators: == vs. ===
const age = 18;
if (age === 18) {
  console.log("You just became an adult!");
}
console.log("18 === 18 --> ", 18 === 18, "strict equality");
console.log('"18"' + " === 18 --> ", "18" === 18, "strict equality");
console.log("18 == 18 --> ", 18 == 18, "loose equality");
console.log('"18"' + " == 18 --> ", "18" == 18, "loose equality");

// Tip: always use strict equality operator (===). If you need conversion, convert manually

// const favNumber = prompt("What is your favorite number?");
// console.log(favNumber);
// console.log(typeof favNumber);

// if (favNumber == 69) {
//   console.log("I see what you did there ;)");
// }

const favNumber = Number(prompt("What is your favorite number?"));
console.log(favNumber);
console.log(typeof favNumber);

if (favNumber === 69) {
  console.log("I see what you did there ;)");
} else if (favNumber === 13) {
  console.log("Lucky one, ain't ya?");
} else {
  console.log("Yeah, whatever =/");
}

// Tip: as with ===, always use strict different operator !==
if (favNumber !== 10) {
  console.log("You could have also said 10...");
}
 */

// Lecture: Boolean Logic
// Basic boolean operators: and, or & not
// - and (&&) - A && B --> both A and B true -> condition is true, false otherwise
// - or (||) - A || B --> at least one true -> condition is true, false otherwise
// - not (!) --> inverts boolean value

/* 
// Lecture: Logical Operators
let hasDriversLicense = true; // A
let hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);

hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// Usually, the condition is inserted directly into the if parenthesis
if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

let isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

hasGoodVision = true;
isTired = true;
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

isTired = false;
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}
 */

/* 
// Lecture: The switch Statement
const day = "monday";
switch (day) {
  case "monday": // day === monday
  case "tuesday": // cases without breaks will continue execution to following case
  case "thursday":
  case "friday":
    console.log("Learn JS");
    console.log("Go to gym");
    break; // stops execution and exits switch statement
  case "wednesday":
    console.log("Learn JS");
    console.log("Play football");
    break;
  case "saturday":
    console.log("Learn JS");
    console.log("Go to gym");
    console.log("Clean home");
  case "sunday":
    console.log("Learn JS");
    console.log("Prepare food");
    console.log("Jog");
    break;
  default: // safety case to process a value that was not specified by cases
    console.log("Not a valid day");
}

if (
  day === "monday" ||
  day === "tuesday" ||
  day === "thursday" ||
  day === "friday"
) {
  console.log("Learn JS");
  console.log("Go to gym");
} else if (day === "wednesday") {
  console.log("Learn JS");
  console.log("Play football");
} else if (day === "saturday") {
  console.log("Learn JS");
  console.log("Go to gym");
  console.log("Clean home");
} else if (day === "sunday") {
  console.log("Learn JS");
  console.log("Prepare food");
  console.log("Jog");
} else {
  console.log("Not a valid day");
}
 */

// Lecture: Statements and Expressions
// Expression - produces value (e.g., 3+4, 1991, true && false && !false)
// Statement - action (e.g., if-else, switch)
// console.log(`${if (true)}`) generates error as if is not expexted in template literal

/* 
// Lecture: The Conditional (Ternary) Operator
// conditional (ternary) operator is like an if-else statement, but all in one line. It is used to take quick decisions and is not meant to replace big if-else statements
// structure
// result (optional) = condition ? true part : false part;

let age = 16;
let drink;
age >= 18 ? console.log("drink wine") : console.log("drink water");
drink = age >= 18 ? "wine" : "water";
console.log(drink);

age = 23;
age >= 18 ? console.log("drink wine") : console.log("drink water");
drink = age >= 18 ? "wine" : "water";
console.log(drink);

// this if-else statement is same as previous ternary operator
let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink = "water";
}

// Ternary operator is an expression and can be inserted in template literal
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
 */
