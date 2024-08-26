// https://javascript.info/keys-values-entries

"use-strict";

/* --------------------------------  */

// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

// For instance:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
  let sumSalaries = 0;

  for (let salary of Object.values(salaries)) {
    sumSalaries += salary;
  }

  return sumSalaries;
}

/* --------------------------------  */

// Write a function count(obj) that returns the number of properties in the object:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2

// Try to make the code as short as possible.

// P.S. Ignore symbolic properties, count only “regular” ones.

// Still a bit long
// let count = (obj) => Object.keys(obj).reduce((keyCount, currentKey) => ++keyCount, 0);

// Site's solution:
let count = (obj) => Object.keys(obj).length;
/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */
