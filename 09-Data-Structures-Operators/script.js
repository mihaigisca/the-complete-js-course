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

  // pass an object to a function
  //   orderDelivery: function (object) {
  //     console.log(object);
  //   },

  // destructure the object in the function parameters and set default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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

// -------------------------------------------------------------------------------------------------------------
// Lecture: Destructuring Objects
// // use curly braces to destructure objects and use the exact property names
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // assigning new variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // setting default values
// // menu property does not exist in the object and will take the default value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // {a, b} = obj; // error - JS thinks it is a code block and not an expression
// ({ a, b } = obj); // need to wrap the expression in parentheses to work
// console.log(a, b);

// // nested objects
// // const { fri } = openingHours;

// // destructuring nested object
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // destructuring nested object and renaming variables
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // pass an inline object to a function
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// -------------------------------------------------------------------------------------------------------------
// Lecture: The Spread Operator
// // spread operator (...) expands an array into all its elements (unpacks all array elements at once)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // old way of adding an array into another array
// console.log(badNewArr);

// const newArr = [1, 2, ...arr]; // unpack array into another array using spread operator
// console.log(newArr);

// // expanding array
// // - when we need to extract all elements into an array
// // - when we need to pass multiple values into a function

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; // adding an element to an array using spread operator
// console.log(newMenu);

// // spread operator is similar to destructuring, but it takes all array elements and does not create new variables
// // use spread operator in places where we would otherwise write values separated by commas

// // create shallow copy
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // spread operator works on all iterables (arrays, strings, maps, sets, but NOT objects)
// const str = 'Captain';
// const letters = [...str, ' ', 'A']; // spread operator on a string
// console.log(letters);
// console.log(...str); // spreading string into separate characters

// // Use escape character (\) to
// // - break a long line of code
// // - insert special characters in a string (like single quote \', new line \n, tab \t, etc)
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // passing array elements as separate arguments into a function the old way
// // restaurant.orderPasta(...ingredients); // passing array elements as separate arguments into a function using spread operator

// // since ES2018, we can use the spread operator on objects, even if it is not an iterable
// const newRestaurant = {
//   foundIn: 1987,
//   ...restaurant,
//   founder: 'Damigianni',
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante la Famiglia';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// -------------------------------------------------------------------------------------------------------------
// Lecture: Rest Pattern and Parameters

// // 1) Destructuring
// // rest pattern uses the same syntax as spread operator (...), but it does the opposite of spreading:
// // it packs individual elements into an array
// // spread (...) operator is on the right side of the = operator
// const arr = [1, 2, ...[3, 4]];

// // rest (...) operator is on the left side of the = operator
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// // rest pattern includes only the elements that have left, not those that were skipped
// // thus rest pattern must be the last element (error otherwise)
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// // rest syntax takes multiple (rest) arguments and packs them into an array
// const add = function (...numbers) {
//   //   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x); // spread operator to pass array elements as separate arguments into a function

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms'); // rest parameter will be an empty array if no other arguments are passed

// // spread operator - used where we would otherwise write VALUES separated by commas
// // rest operator - used where we would otherwise write VARIABLES separated by commas

// -------------------------------------------------------------------------------------------------------------
// Lecture: Short Circuiting (&& and ||)
// // boolean operators can use any data type, return any data type, and do short-circuiting (short-circuit evaluation)
// console.log('---- OR ----');
// // OR operator returns the first truthy value or the last value if all are falsy
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // old way of setting default value
// console.log(guests1);

// // this will set numGuests to 10 even if numGuests is set to 0
// const guests2 = restaurant.numGuests || 10; // short-circuiting with OR operator to set default value
// console.log(guests2);

// console.log('---- AND ----');
// // AND operator returns the first falsy value or the last value if all are truthy
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'jonas');

// // check if method/property exists
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// // short-circuiting with AND operator to call a method if it exists
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// -------------------------------------------------------------------------------------------------------------
// Lecture: The Nullish Coalescing Operator (??)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); // result is 10, as 0 is a falsey value

// // nullish coalescing operator (null and undefined only) to set default value
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // result is 0, as 0 is NOT a nullish value

// const guestNullish = restaurant.nullishGuests ?? 10;
// console.log(guestNullish); // result is 10, as nullishGuests is undefined

// -------------------------------------------------------------------------------------------------------------
// Lecture: Logical Assignment Operators
// const rest1 = {
//   name: 'Capri',
//   //   numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10; // if numGuests is 0 (falsey), 10 is assigned
// // rest2.numGuests ||= 10;

// // Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10; // if numGuests is 0 (non-nullish), 10 is NOT assigned
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>'; // this creates the owner property and assigns "undefined"
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>'; // this does not create the owner property
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// -------------------------------------------------------------------------------------------------------------
// Lecture: Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// automatically iterates through all the items of the array
for (const item of menu) {
  console.log(item);
}

// transforms menu items into arrays that also contain position index in array: [0, 'Focaccia']
for (const item of menu.entries()) {
  //   console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// destructure array directly in condition
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
