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
