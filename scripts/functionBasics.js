// https://javascript.info/function-basics

"use strict";

/* --------------------------------  */

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
//   }

// Will the function work differently if else is removed?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }

// Is there any difference in the behavior of these two variants?
// only difference is there is no else block
// the else block is not needed because there is no code following it. Therefore there is no problem with unintended code execution

/* --------------------------------  */

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

//     Using a question mark operator ?
//     Using OR ||

// Rewrite using ? operator
// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }

// Rewrite using || operator
// function checkAge(age) {
//   // parenthesis for expressions after return is not needed if inline
//   return age > 18 || confirm("Did parents allow you?");
// }

// alert(checkAge(111));

/* --------------------------------  */

// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function min(a, b) {
//   return a < b ? a : b;
// }
// functionalities can be expanded by adding variable checks

// result = min(1, 1);
// alert(result);

/* --------------------------------  */

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
// P.S. In this task the function should support only natural values of n: integers up from 1.

// function pow(x, n) {
//   return x ** n;
// }

// let x = +prompt("enter x", 1);
// let n = +prompt("enter n", 1);

// result = pow(x, n);
// alert(result);
/* --------------------------------  */
