//

'use-strict';

/* --------------------------------  */

// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {
  return function sum(b) {
    return a + b;
  };
}

// console.log(sum(1)(2));

/* --------------------------------  */

// We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

//     inBetween(a, b) – between a and b or equal to them (inclusively).
//     inArray([...]) – in the given array.

// The usage must be like this:

//     arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
//     arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].

// For instance:

// /* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(a, b) {
  return function (item) {
    if (item >= a && item <= b) {
      return true;
    }

    return false;
  };
}

function inArray(arr) {
  return function (item) {
    return arr.includes(item);
  };
}

// console.log(arr.filter(inBetween(1, 6)));
// console.log(arr.filter(inArray([1, 2, 10])));
/* --------------------------------  */

// We’ve got an array of objects to sort:

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

// The usual way to do that would be:

// // by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// Can we make it even less verbose, like this?

// users.sort(byField('name'));
// users.sort(byField('age'));

// So, instead of writing a function, just put byField(fieldName).

// Write the function byField that can be used for that

function byField(field) {
  // Bad code access the property directly instead of conditionals
  // if (field == 'name') {
  //   return (a, b) => (a.name > b.name ? 1 : -1);
  // } else if (field == 'age') {
  //   return (a, b) => (a.age > b.age ? 1 : -1);
  // } else if (field == 'surname') {
  //   return (a, b) => (a.surname > b.surname ? 1 : -1);
  // }

  // sol from website
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

// console.log(users.sort(byField('name')));
/* --------------------------------  */

// The following code creates an array of shooters.

// Every function is meant to output its number. But something is wrong…

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // create a shooter function,
//       alert( i ); // that should show its number
//     };
//     shooters.push(shooter); // and add it to the array
//     i++;
//   }

//   // ...and return the array of shooters
//   return shooters;
// }

// let army = makeArmy();

// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.

// Why do all of the shooters show the same value?

// Fix the code so that they work as intended.

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let index = i;

    let shooter = function () {
      // create a shooter function,
      alert(index); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */
