// https://javascript.info/while-for

"use strict";
/* --------------------------------  */

// What is the last value alerted by this code? Why?

// let i = 3;

// while (i) {
//   alert(i--);
// }

// -> 1. Because at i = 0, condition for while is falsy and the block isn't executed.

/* --------------------------------  */

// For every loop iteration, write down which value it outputs and then compare it with the solution.

// Both loops alert the same values, or not?

// The prefix form ++i:

// let i1 = 0;
// while (++i1 < 5) alert(i1);

// -> 1 2 3 4

// The postfix form i++

// let i2 = 0;
// while (i2++ < 5) alert(i2);

// -> 1 2 3 4 5
/* --------------------------------  */

// For each loop write down which values it is going to show. Then compare with the answer.

// Both loops alert same values or not?

// The postfix form:

// for (let i = 0; i < 5; i++) alert(i);

// -> 0 1 2 3 4

// The prefix form:

// for (let i = 0; i < 5; ++i) alert(i);

// -> 0 1 2 3 4
// both same because the increment is seperate from the condition check(seperate statement), meaning the returned value from increment is not used to check for condition

/* --------------------------------  */
// Use the for loop to output even numbers from 2 to 10.

// solution
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) alert(i);
// }
/* --------------------------------  */

// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// solution:
// let i = 0;

// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

/* --------------------------------  */

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

// let input;

// while (1) {
//   input = prompt("Enter a number", "");

//   if (input === "" || Number.isNaN(+input)) {
//     alert("The input must be a number");
//   } else if (input === null) {
//     break;
//   } else if (input <= 100) {
//     alert("The input must be greater than 100");
//   } else {
//     alert(input);
//     break;
//   }
// }
// this is long

// do {
//   input = prompt("Enter a number greater than 100", 0);
//   if (Number.isNaN(+input)) {
//     alert("The input must be a number");
//   }
// } while ((input <= 100 && input) || Number.isNaN(+input));

/* --------------------------------  */
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let number = +prompt("enter a number", 0);
let divisorCount = 0;

// for (let n = number; n > 0; n--) {
//   divisorCount = 0;
//   if (n == 2 || n == 3) {
//     document.write(n + " ");
//   } else {
//     for (let i = 1; i <= n; i++) {
//       if (n % i == 0) {
//         divisorCount++;
//       }
//     }
//     if (divisorCount == 2) {
//       document.write(n + " ");
//       continue;
//     }
//   }
// }
// can still be improved by reducing number of iterations

for (let n = number; n > 0; n--) {
  divisorCount = 0;
  if (n == 2 || n == 3) {
    document.write(n + " ");
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        divisorCount++;
        break;
      }
    }
    if (divisorCount == 0) {
      document.write(n + " ");
    }
  }
}

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */
