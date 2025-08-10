'use strict';

// Lecture: PROJECT #2: Modal Window
// Manipulating classes is the main way to manipulate web pages
// all the objects that we will need can be queried and stored right at the beginning
// DOM querySelector limitation - when there are multiple elements with same selector, only the first is selected - use querySelectorAll instead
// the NodeList returned by querySelectorAll is not an array, but it acts similarly (e.g., its elements are accessible via [], it has the length property)
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsShowModal = document.querySelector('.show-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const showModal = function () {
  // JS allows adding/removing classes dinamically to elements
  // here we don't use the . because we are just passing the class name
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsShowModal.length; i++)
//   btnsShowModal[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

for (let i = 0; i < btnsShowModal.length; i++)
  // JS allows to pass a function as an argument which improves the code readability
  btnsShowModal[i].addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
