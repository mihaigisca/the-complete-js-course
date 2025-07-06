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
