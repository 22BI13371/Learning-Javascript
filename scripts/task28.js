// https://javascript.info/recursion

"use-strict";

/* --------------------------------  */

// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Make 3 solution variants:

//     Using a for loop.
//     Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
//     Using the arithmetic progression formula.

// An example of the result:

// function sumTo(n) { /*... your code ... */ }

// alert( sumTo(100) ); // 5050

// P.S. Which solution variant is the fastest? The slowest? Why?

// P.P.S. Can we use recursion to count sumTo(100000)?

// // For loop
// function sumTo(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// }

// // Recursion
// function sumTo(n) {
//   if (n == 1) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }

// Arithmetic formula
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

// console.log(sumTo(100));

/* Arithmetic formula solution is fastest because for any n, the number of operations is constant.
Recursion and for loop is the same speed because of the same number of operation each takes to compelte the task
*extra* Recursion takes O(n) time and o(n) space because of the context stack it takes to complete the task
, for loop take O(n) time and o(1) space and arithmetic formula takes o(1) time and space */
// wrong about recursion and for loop
/** recursion slower because of the extra work required for managing the stack, memory, etc. */

/* we cannot use recursion to count sumTo(100000) because of the limitation of javascript engine in most cases*/

/* --------------------------------  */

// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:

// n! = n * (n - 1) * (n - 2) * ...*1

// Values of factorials for different n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// The task is to write a function factorial(n) that calculates n! using recursive calls.

// alert( factorial(5) ); // 120

// P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6

function factorial(n) {
  //   if (n == 1) {
  //     return n;
  //   }
  //   return n * factorial(n - 1);

  // prettier-ignore
  return (n != 1) ? n * factorial(n - 1) : 1;
}

// console.log(factorial(6));

/* --------------------------------  */

// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

// function fib(n) { /* your code */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.

// // formula
// function fib(n) {
//   // very slow for big numbers
//   // prettier-ignore
//   // return (n == 2) ? 1 :
//   //   (n == 1) ? 1 : fib(n-1) + fib(n-2);

//   let phi = (1 + Math.sqrt(5)) / 2

//   return (Math.pow(phi, n) - Math.pow(1 - phi, n)) / Math.sqrt(5);
// }

// different method makes use of dynamic programming bottom-up
function fib(n) {
  let a = 1,
    b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// console.log(fib(77));

/* --------------------------------  */

// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// let list = {
//   value: 1,
//   next: null,
// };

// Write a function printList(list) that outputs list items one-by-one.

// Make two variants of the solution: using a loop and using recursion.

// What’s better: with recursion or without it?

// // Loop
// function printList(list) {
//   while (true) {
//     if (list.next === null) {
//       console.log(list.value);
//       break;
//     } else {
//       console.log(list.value);
//       list = list.next;
//     }
//   }
// }

// // Recursion
// function printList(list) {
//   if (list.next === null) {
//     console.log(list.value);
//     return;
//   } else {
//     console.log(list.value);
//     printList(list.next);
//   }
// }

// Shorter solutions
// // loop
// function printList(list) {
//   let tmp = list;

//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }

function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

// printList(list);
/* --------------------------------  */

// Output a single-linked list from the previous task Output a single-linked list in the reverse order.

// Make two solutions: using a loop and using a recursion.

function printListReverse(list) {
  if (list.next) {
    printListReverse(list.next);
  }

  console.log(list.value);
}

printListReverse(list);
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
