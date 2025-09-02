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