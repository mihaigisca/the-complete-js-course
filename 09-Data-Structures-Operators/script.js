'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// -------------------------------------------------------------------------------------------------------------
// Lecture: Destructuring Arrays
// // array destructuring is an ESX feature, a way of unpacking values from objects into separate variables
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // destructuring array into variables (remember const and square brackets, original array remains unchanged)
// console.log(x, y, z);
// console.log(arr);

// // const [first, second] = restaurant.categories; // only destructuring first two elements of the array
// const [first, , third] = restaurant.categories; // only destructuring first and third elements of the array (use empty space for skipping)
// console.log(first, third);

// let [main, , secondary] = restaurant.categories;
// [main, secondary] = [secondary, main]; // switching variables using destructuring
// console.log(main, secondary);

// // receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0); // destructuring the returned array from a function
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // destructuring array
// console.log(i, j);
// const [k, , [l, m]] = nested; // destructuring nested array
// console.log(k, l, m);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9]; // setting default values in case there are not enough values in the array
// console.log(p, q, r);
