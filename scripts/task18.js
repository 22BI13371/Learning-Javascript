// https://javascript.info/number

"use strict";

/* --------------------------------  */

// Create a script that prompts the visitor to enter two numbers and then shows their sum.

// P.S. There is a gotcha with types.

// var a = +prompt("Enter number a", 0);
// var b = +prompt("Enter number b", 0);

// alert((a + b).toFixed(5));

/* --------------------------------  */

// According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

// For instance:

// alert( 1.35.toFixed(1) ); // 1.4

// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

// alert( 6.35.toFixed(1) ); // 6.3

// How to round 6.35 the right way?

/* 6.35.toFixed(1) == 6.3 is because there is a loss of precision of fractional values. in this case if we run 6.35.toFixed(20), we can see that the value is actually slightly smaller than 6.35, so when rounded it will round down to 6.3. For 1.35.toFixed(20), the value is slightly greater than 1.35 so it will be rounded up to 1.4 */

// solution

// var num = Math.round(6.35 * 10) / 10;
// console.log(num.toFixed(1));

/* --------------------------------  */

// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

// The resulting value must be returned as a number.

// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

//solution

// function readNumber() {
//   let number;

//   while (1) {
//     number = prompt("Enter a number", "");

//     if (number === null || number == "") {
//       return null;
//     } else if (isFinite(number)) {
//       return +number;
//     } else {
//       alert("Enter a number please?");
//     }
//   }
// }

// alert(`Read: ${readNumber()}`);

// slightly shorter solution

function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Read: ${readNumber()}`);

/* --------------------------------  */

// This loop is infinite. It never ends. Why?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// The cause for the infinite loop is the loss of precision of fractional number. Because fractional number is most of the time not exact, this causes some unexpected behaviours.

// In this case, there is some error in the representation of 0.2. The error will accumulate causing i to never exactly equal to 10.

/* --------------------------------  */

// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

// Examples of its work:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

// solution
// function random(min, max) {
//   do {
//     var randomNum = 10 * Math.random();
//   } while (min > randomNum || max <= randomNum);

//   return randomNum;
// }

// alert(random(1, 10));

// This is inefficient because this continuously loops until the number is in required range, this will be slow for larger ranges.

// Website solution:
// We need to “map” all values from the interval 0…1 into values from min to max.

// That can be done in two stages:

//     If we multiply a random number from 0…1 by max-min, then the interval of possible values increases 0..1 to 0..max-min.
//     Now if we add min, the possible interval becomes from min to max.

// function:
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert(random(1, 10));

/* --------------------------------  */

// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

// You can use the solution of the previous task as the base.

// solution
// function randomInteger(min, max) {
//   [min, max] = min > max ? [max, min] : [min, max];
//   var length = max.toString().length;

//   do {
//     var randomNum = Math.round(Math.pow(10, length) * Math.random());
//   } while (min > randomNum || max < randomNum);

//   return randomNum;
// }

// // alert(randomInteger(10, 100));

// for (let i = 0; i < 1000; i++) {
//   document.write(randomInteger(1, 10) + " ");
// }

// performance might be poor

// function randomInteger(min, max) {
//   return Math.round(min + Math.random() * (max - min));
// }
// this solution is not correct because the border value is 2 times less likely to appear than values in the middle

// 2 of many ways to solve this:
// first: adjusting interval border
// function randomInteger(min, max) {
//   [min, max] = min > max ? [max, min] : [min, max];

//   return Math.round(min - 0.5 + Math.random() * (max - min + 1));
// }

// second: Math.floor() with interval [min, max + 1]
// function randomInteger(min, max) {
//   [min, max] = min > max ? [max, min] : [min, max];

//   return Math.floor(min + Math.random() * (max - min + 1));
// }

// for (let i = 0; i < 1000; i++) {
//   document.write(randomInteger(1, 10) + " ");
// }

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */
