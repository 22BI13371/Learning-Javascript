// https://javascript.info/array-methods

"use strict";

/* --------------------------------  */

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string into an array, transform it and join back.

// solution
// function camelize(str) {
//   // let str = "asd-s";

//   let arr = str.split("-");
//   if (arr[0]) {
//     arr = arr.map((item) => item[0].toLocaleUpperCase() + item.slice(1));
//     arr.splice(0, 1, arr[0].toLocaleLowerCase());
//   } else {
//     arr.splice(0, 1);
//     arr = arr.map((item) => item[0].toLocaleUpperCase() + item.slice(1));
//   }

//   return arr.join("");
// }

function camelize(str) {
  // ignore the first work in string. the arr.join() method ignores "" elem in an array(?)
  return str
    .split("-")
    .map((word, index) => (index == 0 ? word : word[0].toLocaleUpperCase() + word.slice(1)))
    .join("");
}

// console.log(camelize("-webkit-transition"));
// alert(camelize("-webkit-transition"));
// alert(camelize("background-color"));

/* --------------------------------  */

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// Solution
// return new array with lower bound a, upper bound b, from given array arr without modifiying it
function filterRange(arr, a, b) {
  // prettier-ignore
  return arr.filter((item) => (a <= item && item <= b));
}

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(typeof filtered[0]); // 3,1 (matching values)

// alert(arr); // 5,3,8,1 (not modified)

/* --------------------------------  */

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
  // works but takes O(2n)(?) time and O(2n) space
  // let tmpArr = arr.filter((number) => a <= number && number <= b);
  // arr.splice(0, arr.length);

  // tmpArr.forEach((element, index) => {
  //   arr[index] = element;
  // });

  // takes o(n) time and O(n) space
  for (let i = 0; i < arr.length; i++) {
    if (a > arr[i] || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
// let array = [5, 3, 8, 1];

// filterRangeInPlace(array, 3, 5); // removed the numbers except from 1 to 4

// alert(arr); // [3, 1]

/* --------------------------------  */

// Sort in decreasing order

// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// arr.sort((a, b) => b - a);

// alert(arr); // 8, 5, 2, 1, -10

/* --------------------------------  */

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
  return arr.slice(0).sort();
}

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (no changes)

/* --------------------------------  */

// Task: Create an extendable calculator || URL: https://javascript.info/array-methods#create-an-extendable-calculator
// This solution will only cover 2 operands case(eg: "2 + 2").

/**
 * @description Extendable Calculator constructor.
 *
 * @author Imagination
 *
 * @todo add error handling
 */
function Calculator() {
  // List of available operaitons
  let operations = [
    { operator: "+", function: (a, b) => +a + +b },
    { operator: "-", function: (a, b) => a - b },
  ];

  /**
   *
   * A method to parse the input string and perform calculation.
   * Calculator is predefined with numeric addition and subtraction.
   *
   * @param string
   * a string in the format “NUMBER operator NUMBER” (space-delimited)
   * @returns result of the calculation
   */
  this.calculate = function (str) {
    let expressions = str.split(" ");

    // prettier-ignore
    let availableOperation = operations.find((operation => operation.operator == expressions[1]))

    if (availableOperation && !isNaN(expressions[0]) && !isNaN(expressions[2])) {
      return availableOperation.function(expressions[0], expressions[2]);
    } else {
      return NaN;
    }
  };

  /**
   *
   * A method to add an operation to the calculator
   *
   * @param name name of the operator
   * @param func function to perform the operation
   */
  this.addMethod = function (name, func) {
    operations.push({
      operator: name,
      function: func,
    });
  };
}

/* --------------------------------  */

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// // let usersMapped = users.map(function (user) {
// //   return {
// //     fullName: user.name + " " + user.surname,
// //     id: user.id,
// //   };
// // });

// let usersMapped = users.map((user) => ({
//   fullName: user.name + " " + user.surname,
//   id: user.id,
// }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // John Smith

/* --------------------------------  */

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

//solution
function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

/* --------------------------------  */

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

// Solution
// kinda works but not equal distribution of probability
// function shuffle(array) {
//   array.sort(() => Math.floor(Math.random() * 3 - 1));
// }

// better solution
// Fisher-yates shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// let arr = [1, 2, 3];
// shuffle(arr);
// document.write(arr);

/* --------------------------------  */

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

function getAverageAge(users) {
  // prettier-ignore
  return Math.round(users.reduce((averageAge, user) => (user.age + averageAge), 0) / users.length);
}

// /* --------------------------------  */

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// alert(unique(strings)); // Hare, Krishna, :-O

function unique(arr) {
  let uniqueArr = [];

  // This is O(n^2)
  // Using Set will allow for O(n)
  for (let item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }

  return uniqueArr;
}

/* --------------------------------  */

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.

function groupById(arr) {
  // This create new independent object from the original. In a database setting this is incorrect since chaning the new object will not affect the original which users might not want
  // return arr.reduce((previousItem, item) => Object.assign(previousItem, { [item.id]: item }), {});

  // This returns the reference to the original data in the array. Therefore any changes in any of the 2 will affect the other as well.
  return arr.reduce((previousItem, item) => {
    previousItem[item.id] = item;
    return previousItem;
  }, {});
}

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */
