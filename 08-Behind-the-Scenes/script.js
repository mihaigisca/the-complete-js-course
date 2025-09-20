'use strict';

// Lecture: An High-Level Overview of JavaScript
// The tip of the iceberg: JS is a high-level, object-oriented, multi-paradigm programming language
// JS is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first class functions and a non-blocking event loop concurrency model

// high-level - developer does NOT have to worry about resources, everything happens automatically
// garbage-collected - cleaning old objects from the computer memory
// interpreted or just-in-time compiled language - abstraction over 0s and 1s (machine code) happens in JS Engine
// multi-paradigm - approaches and mindsets of structuring code, which will direct coding styles and techniques
// - procedural programming
// - object-oriented programming (OOP)
// - functional programming (FP)
// prototype-based object-oriented - everything are objects, expect primitive types
// first-class functions - functions are treated as regular variables
// dynamic - types become known at runtime and are automatically changed
// single-threaded - can only do one thing at a time
// - concurrency model: how JS engine handles multiple tasks happening at the same time
// non-blocking event loop - takes long-running tasks, executes them in "background", and puts them back in the main thread once they are finished

// -------------------------------------------------------------------------------------------------------------
// Lecture: The JavaScript Engine and Runtime
// --- JS engine ---
// JS engine - computer program that runs JS code
// - every browser has its engine, most popular is Google's V8 that also powers Node.js)
// any JS engine contains
// - a callstack - where code is executed (execution contexts)
// - a heap - where objects are stored
// compilation - code converted to machine code binary file at once (can be executed way after compilation)
// interpretation - code converted to machine code and executed line-by-line
// just-in-time (JIT) compilation - code converted to machine code at once (without creating binary file), then executed immediately
// JS engine steps
// - parsing - code parsed (read) into a data structure called Abstract Syntax Tree (AST) that contains such info as name, value, kind; also here takes place the syntax error check
// - compilation - compiles the generated AST into machine code (JIT)
// - execution - immediately executes the compiled code (in call stack)
// - optimization - multiple compilation-execution cycles for optimization (developers do not have access, happens in special threads)

// --- JS runtime ---
// JS runtime - collection of necessary tools to run JS code in a container (e.g., browser)
// JS runtime for browsers contain
// - JS engine
// - WEB APIs - functionalities provided to the JS engine, but that are not past of JS itself
// - callback queue - contains callback functions from DOM event listeners
// - event loop - interaction between callback queue and call stack; essential for non-blocking concurrency model

// -------------------------------------------------------------------------------------------------------------
// Lecture: Execution Contexts and The Call Stack
// Execution
// - creation of global execution code (for top-level code, i.e. not inside a function)
// - execution of top-level code inside the global EC
// - execution of functions and waiting for callbacks

// Execution context (EC) - environment that stores all the necessary info for some code to be executed:
// - variable environment (let, const, var; functions, arguments)
// - scope chain
// - this keyword

// ECs are generated during "creation phase"
// There is exactly one global EC for top-level code.
// There is an EC for each function.
// All ECs make the call stack.

// Note: Arrow functions don't have their own arguments object and this keyword. They inherit it from the closes parent.

// JS Engine = call stack + memory heap
// Call stack - ECs are stacked on top of each other to keep track where we are in the execution

// -------------------------------------------------------------------------------------------------------------
// Lecture: Scope and The Scope Chain
// scoping - how variables are organized and accessed
// lexical scoping - scoping is controlled by placement of functions and blocks in code
// scope - space or environment in which a certain variable is declared (global, function and block scopes)
// scope of a variable - region of code where a certain variable can be accessed.

// Global scope
// - outside of any function or block
// - variables declared here are accessible everywhere (global variables)

// Function scope
// - variables are accessible only inside function (function-scoped), not outside
// - also called local scope

// Block scope (ES6)
// - variables are accessible only inside block (block-scoped)
// - block scope applied only to let and const variables
// - var variables are visible outside block (function-scoped)
// - functions are also block-scoped (only in strict mode)

// Inner scopes have access to variables (and arguments) from all outer scopes.
// Inner scopes search for variables in outer scopes - variable lookup in scope chain
// Outer scopes cannot look down to inner scopes.

// const name = 'Jonas';

// function first() {
//     const age = 30;

//     function second() {
//         const job = 'teacher';
//         console.log(`${name} is ${age} year-old ${job}`);
//     }

//     second();
// }

// first();

// var variables declared within blocks are visible outside the block (function-scoped)

// Scope chain - order in which functions are written in the code
// Call stack - order in which functions are called

// Conclusions:
// - scoping - where do variables live? Where can a variable be accessed and where not?
// - 3 types of scope in JS: global, function, block
// - let and const variables are block-scoped, var variables are function scoped
// - lexical scoping - rules for accessing variables are based on where exactly variables are declared in code
// - scope chain - every scope has access to outer scopes (not the other way around)
// - variable lookup - engine looks up in the current scope and then in the scope chain to find variables
// - scope chain (how and were variables are declared) has nothing to do with call stack (order in which functions are called)

// -------------------------------------------------------------------------------------------------------------
// Lecture: Scoping in Practice
// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     // console.log(firstName); // firstName visible as part of outer scope (global in this case)
//     // console.log(lastName); // lastName not found neither in this scope nor in outer scopes

//     function printAge() {
//         // age and birthYear visible as part of outer scope (one level above)
//         // firstName visible as part of outer scope (two levels above)
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var isMillenial = true;

//             // firstName visible as part of outer scope (three levels above)
//             // const str = `Oh, and you are a millenial, ${firstName}`;
//             // console.log(str);

//             // Creating NEW variable with same name as outer's scope variable
//             // it is normal to have same-name variables across different scopes
//             const firstName = 'Steven';

//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT!';

//             const str = `Oh, and you are a millenial, ${firstName}`; // firstName look-up stops at first finding
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }

//         // console.log(str); // const and let variables are block-scoped - not visible outside the if block
//         console.log(isMillenial); // var variable is function-scoped - visible outside the if block
//         // add(1, 2); // functions are block-scoped (only in strict mode) - not visible outside the if block
//         console.log(output);
//     }

//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age); // age not found because it is part of inner scope (calcAge function)
// // console.log(printAge); // printAge not found because it is part of inner scope (calcAge function)

// -------------------------------------------------------------------------------------------------------------
// Lecture: Variable Environment: Hoisting and The TDZ
// > hoisting - makes some types of variables accessible/usable before they are actually declared.
// > before execution, code is scanned for variable declarations and, for each variable,
//   a new property is created in the variable environment object.
// > TDZ - temporal dead zone
//
// function declaration - hoisted (init value when accessed before declaration - actual function)
// var variables - hoisted (init value when accessed before declaration - undefined)
// let/const variables - not hoisted (init value when accessed before declaration - uninitialized, TDZ, error)
// function expressions and arrow - depends if using var or let/const
//
// TDZ - a lot easier to avoid and catch errors
// access undeclared variable - error "variable not defined"
// access let/const variable before declaration - error "cannot access variable before initialization"

// -------------------------------------------------------------------------------------------------------------
// Lecture: Hoisting and TDZ in Practice

// console.log('--- Variables ---');
// // Variables
// console.log(me); // accessing var variables before declaration: no error, value 'undefined'
// // console.log(job); // accessing let variables before declaration: error 'Cannot access 'job' before initialization'
// // console.log(age); // accessing const variables before declaration: error Cannot access 'age' before initialization

// var me = 'me';
// let job = 'student';
// const age = 33;

// console.log('--- Functions ---');
// // Functions
// console.log(addDecl(1, 2)); // accessing function declaration before definition: works
// // console.log(addExpr(1, 2)); // accessing const function expression before definition: Cannot access 'addExpr' before initialization
// // console.log(addArr(1, 2)); // accessing var function expression before definition: error addExprVar is not a function
// console.log(addArr); // being undefined, above translates to 'undefined(1, 2)'

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArr = (a, b) => a + b;

// console.log('--- Hoisting pitfall ---');
// // Hoisting pitfall
// console.log(numProjects);
// if (!numProjects)
//   // numProjects is 'undefined', but still a falsy value, so method is called - NOT GOOD!
//   deleteShoppingCart();

// var numProjects = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// // Best practices
// // - don't use var
// // - declare variables at the top of each scope
// // - declare functions first before using

// var x = 1;
// let y = 2;
// const z = 3;

// // window - global object in developer tools console
// // only 'x' variable shows up in the window object
// // variables declared with let and const do not create properties in window object
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// -------------------------------------------------------------------------------------------------------------
// Lecture: The this Keyword
// // this keyword/variable - created for every execution context (every function), pointing to the function owner
// // this variable is ONLY assigned when the function is actually called

// // 4 differen ways in which functions can be called
// // 1. as a method (function attached to an object) - this points to the object that is calling the method
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };
// console.log(jonas.calcAge()); // 46

// // 2. simple function call (not attached to any object) - this is undefined in strict mode (window object otherwise)
// // 3. arrow functions - inherits this from its parent scope (lexical this)
// // 4. event listeners - this points to the DOM element that the handler is attached to

// // IMPORTANT: this does NOT point to the function itself, NOR to its variable environment

// -------------------------------------------------------------------------------------------------------------
// Lecture: The this Keyword in Practice
console.log(this); // in global scope, this points to the window object (browser)

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // in regular function, this is undefined (in strict mode)
};
calcAge(1991);

const calcAgeArr = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // inherits this from parent scope which happens to be global scope (window object)
};
calcAgeArr(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    console.log(this); // this points to the jonas object
  },
};
jonas.calcAge();

const lucy = {
  year: 2018,
};

lucy.calcAge = jonas.calcAge; // method borrowing
lucy.calcAge(); // this points to lucy object as lucy is the caller

const funcNotPartOfObj = jonas.calcAge;
// funcNotPartOfObj(); // this is now undefined -> error Cannot read properties of undefined
// as console.log(2037 - this.year) translates to console.log(2037 - undefined.year)
