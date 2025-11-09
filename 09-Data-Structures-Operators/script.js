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

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

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
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // automatically iterates through all the items of the array
// for (const item of menu) {
//   console.log(item);
// }

// // transforms menu items into arrays that also contain position index in array: [0, 'Focaccia']
// for (const item of menu.entries()) {
//   //   console.log(item);
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// // destructure array directly in condition
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// -------------------------------------------------------------------------------------------------------------
// Lecutre: Enhanced Object Literals
// // 1. a nested object can be defined outside the parent object
// // 2. it is not required to define a method using function keyword
// // 3. property names can be computated (helpful when programatically set)
// const nestedObject = {};
// const parentObject = {
//   // 3.
//   ['monday']: '9-18',

//   // 1.
//   //   nestedObject: {},
//   nestedObject,

//   // 2.
//   //   someMethod: function () {},
//   someMethod() {},
// };

// -------------------------------------------------------------------------------------------------------------
// Lecutre: Optional Chaining (?.)
// // console.log(restaurant.openingHours.mon); // no such property -> undefined
// // console.log(restaurant.openingHours.mon.open) // error trying to access open on undefined mon

// // without optional chaining
// if (
//   restaurant.openingHours &&
//   restaurant.openingHours.mon &&
//   restaurant.openingHours.open
// ) {
//   restaurant.openingHours.mon.open;
// }

// // optional chaining - accessing properties only if they exists

// // Variables
// console.log(restaurant.openingHours?.mon); // only access mon if exists, otherwise return undefined
// console.log(restaurant.openingHours.mon?.open); // only access open if exists, otherwise return undefined

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // if you want to use a variable name as the property name, use the brackets notation
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.() ?? 'Method does not exist');

// // Arrays
// let users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// console.log(users[0]?.name ?? 'User array empty');

// users = [];
// console.log(users[0]?.name ?? 'User array empty');

// -------------------------------------------------------------------------------------------------------------
// Lecutre: Looping Objects: Object Keys, Values, and Entries
// // Looping over property names (aka keys)
// // Object.keys(obj) returns an array of names (strings) of top-level properties
// const properties = Object.keys(openingHours);
// console.log(properties);

// // console.log(`We are open for ${properties.length} days per week!`);
// let openStr = `We are open for ${properties.length} days per week: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Looping over property values
// // Object.values(obj) returns an array of objects that the top-level properties contain
// const values = Object.values(openingHours);
// console.log(values);

// // Looping over object entries
// // Object.entries(obj) returns an array of entries, each entry is itself an array of property-value pair
// const entries = Object.entries(openingHours);
// console.log(entries);

// // for (const x of entries) {
// //   console.log(x);
// // }

// // key, value
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// -------------------------------------------------------------------------------------------------------------
// Lecture: Sets
// // - collection of unique values
// // - expects iterables, is one itself
// // - order is irrelevant
// const orders = ['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta'];
// const ordersSet = new Set(orders);
// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet.size);
// ordersSet.delete('Risotto');
// console.log(ordersSet);
// // because order is irrelevant, and set is not used to retrieve a value,
// // the only way to check whether set contains a value is by using the 'has' method
// for (const order of ordersSet) {
//   console.log(order);
// }
// // use spread operator to retrieve an array
// const ordersUnique = [...ordersSet];
// console.log(ordersUnique);
// console.log(new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']).size);
// console.log(new Set('Example'));
// console.log(new Set('Example').size);
// // use sets when working with unique values, arrays otherwise

// -------------------------------------------------------------------------------------------------------------
// Lecture: New Operations to Make Sets Useful!
// // ES 2025 added new 7 methods to sets
// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Set intersection: ', commonFoods);
// console.log([...commonFoods]);

// const allFoods = italianFoods.union(mexicanFoods);
// console.log('Set union: ', allFoods);
// const allFoodsManual = new Set([...italianFoods, ...mexicanFoods]);
// console.log('Combine using spread', allFoodsManual);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('Set diff italian: ', uniqueItalianFoods);
// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log('Set diff mexican: ', uniqueMexicanFoods);

// const uniqueItalianAndMexicanFoods =
//   italianFoods.symmetricDifference(mexicanFoods);
// console.log('Set symmetric diff: ', uniqueItalianAndMexicanFoods);

// // remaining methods: isDisjointFrom, isSubsetOf, isSupersetOf

// -------------------------------------------------------------------------------------------------------------
// Lecture: Maps: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// // set method:
// // add new key-value pair to map
// // return updated map (allows chaining set methods)
// console.log(
//   rest
//     .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'we are open ^_^')
//     .set(false, 'we are closed :(')
// );

// // get method: get value by key
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // has method: check if there is such key
// console.log(rest.has('categories'));
// // delete method: delete entry by key
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear(); // delete all entries

// // use objects as map elements
// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest.get(arr));

// -------------------------------------------------------------------------------------------------------------
// Lecture: Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best breakfast?'],
//   [1, 'fruits'],
//   [2, 'porridge'],
//   [3, 'meat/eggs'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // map has same structure as Object.entries(...)
// console.log(Object.entries(openingHours));
// // convert object to map
// console.log(new Map(Object.entries(openingHours)));

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer: '));
// console.log(answer);

// // if (answer === question.get('correct')) {
// //   console.log(question.get(true));
// // } else {
// //   console.log(question.get(false));
// // }

// console.log(question.get(question.get('correct') === answer));

// // convert map to array
// console.log([...question]);
// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// -------------------------------------------------------------------------------------------------------------
// Lecture: Summary: Which Data Structure to Use?
// Data sources: from program itself, from UI (user input), external sources (e.g., web API)
// data collection -> data structures -> 4 types: object, array, set, map
// simple list -> array/set
// - array:
// -- ordered list
// -- data manipulation
// - set:
// -- unique values
// -- remove duplicates
// -- high-performance
// key/value pairs -> object/map (keys describe values)
// - object:
// -- easier to write and access values with . and []
// -- use to include functions (methods)
// -- use when working with JSON
// - map:
// -- better performance,
// -- keys can have any data type,
// -- easy to iterate and compute size
// -- use to simply map keys to values
// -- use for non-string keys

// -------------------------------------------------------------------------------------------------------------
// Lecture: Working With Strings - Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log('B737'[0], 'B737'.length);
// console.log(airline.length, airline.indexOf('r'), airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'), airline.lastIndexOf('portugal')); // case sensitive
// console.log(airline.slice(4)); // extract (new) substring at 4
// console.log(airline.slice(4, 7)); // extract (new) substring at 4 up to 7
// console.log(airline.slice(0, airline.indexOf(' '))); // extract first word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // extract last word
// console.log(airline.slice(-2)); // (-) -> start from the end
// console.log(airline.slice(1, -1));
// const checkMiddleSeat = function (seat) {
//   // middle seat in small planes B and E
//   // const column = seat[seat.length - 1].toUpperCase();
//   const column = seat.slice(-1).toUpperCase();
//   console.log(
//     column === 'B' || column === 'E'
//       ? `${seat} is middle seat`
//       : `${seat} is not middle seat`
//   );
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // boxing - converting string into String object when calling methods on it
// console.log(
//   typeof 'example',
//   typeof new String('example'),
//   typeof new String('example').slice(1)
// );

// -------------------------------------------------------------------------------------------------------------
// Lecture: Working With Strings - Part 2
// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase(), airline.toUpperCase());

// // fix name capitalization
// const passenger = 'jOnAs';
// // const passengerLower = passenger.toLowerCase();
// // const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
// // console.log(passengerCorrect);
// console.log(passenger[0].toUpperCase() + passenger.slice(1).toLowerCase());

// const email = 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.Io  \n'; // \n is a whitespace
// console.log(email === loginEmail.toLowerCase().trim());

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'Door 1! Door 1!';
// // replace - replaces only first occurrence
// console.log(announcement.replace('Door', 'Gate'));
// // replaceAll - all occurrences
// console.log(announcement.replaceAll('Door', 'Gate'));
// // replace with regular expression
// console.log(announcement.replace(/Door/g, 'Gate'));

// // bools
// const plane = 'Airbus A320neo';
// console.log(
//   plane.includes('A320'),
//   plane.includes('Boeing'),
//   plane.startsWith('Air'),
//   plane.endsWith('neo')
// );

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   baggage.includes('knife') || baggage.includes('gun')
//     ? console.log('Freeze!')
//     : console.log('Have a good one!');
// };
// checkBaggage('I have A, B, C and a knife.');
// checkBaggage('I have D, E and F.');
// checkBaggage('I have H, a gun and I.');

// -------------------------------------------------------------------------------------------------------------
// Lecture: Working With Strings - Part 3
// split - split an array by a separator
console.log('a+very+nice+string'.split('+'));
console.log('John Doe'.split(' '));
const [firstName, lastName] = 'John Doe'.split(' ');
console.log(firstName, lastName);
// join - join elements into a string separated by separator
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // did it on my own eopta!!!
  }

  return namesUpper.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));
console.log(capitalizeName('john doe'));

// padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  return str.slice(-4).padStart(str.length, '*');
};

console.log(maskCreditCard(1234567890123456));

// repeat
const repeatMsg = 'Twinkle, little star!';
console.log(repeatMsg.repeat(3));

const announcePlanesInLine = function (n) {
  console.log(`There are ${'✈️'.repeat(n)} planes in line`);
};
announcePlanesInLine(1);
announcePlanesInLine(2);
announcePlanesInLine(3);
