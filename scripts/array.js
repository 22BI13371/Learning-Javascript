// https://javascript.info/array

"use strict";

/* --------------------------------  */

// What is this code going to show?

// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// // what's in fruits?
// alert( fruits.length ); // ?

// solution
// fruits.length == 4
// "Apples", "Pear", "Orange", "Banana" will be in fruits

/* --------------------------------  */

// Let’s try 5 array operations.

//     Create an array styles with items “Jazz” and “Blues”.
//     Append “Rock-n-Roll” to the end.
//     Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
//     Strip off the first value of the array and show it.
//     Prepend Rap and Reggae to the array.

// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

// Solution
// var styles = ["Jazz", "Blues"];
// console.log(styles);

// styles.push("Rock-n-Roll");
// console.log(styles);

// let middleIndex = Math.floor(styles.length / 2);
// styles[middleIndex] = "Classics";
// console.log(styles);

// styles.shift();
// console.log(styles);

// styles.unshift("Rap", "Reggae");
// console.log(styles);

/* --------------------------------  */

// What is the result? Why?

// let arr = ["a", "b"];

// arr.push(function () {
//   console.log(this);
// });

// arr[2](); // ?

// Solution
// It shows the arr the same way as using alert(arr) because an array is a special kind of object, therefore 'this' reference can be used to return the array object

/* --------------------------------  */

// Write the function sumInput() that:

//     Asks the user for values using prompt and stores the values in the array.
//     Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
//     Calculates and returns the sum of array items.

// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

// function sumInput() {
//   let num;
//   let sum = 0;
//   let numbers = [];

//   // this works but does more comparisons
//   // do {
//   //   num = prompt("Enter a number please", 0);
//   //   Number.isFinite(+num) ? numbers.push(+num) : +num;
//   // } while (num !== null && num !== "" && isFinite(num));

//   // This uses less comparisons
//   while (true) {
//     let num = prompt("Enter a number please", 0);

//     if (num === null || num === "" || !isFinite(num)) break;

//     numbers.push(+num);
//   }

//   for (let number of numbers) {
//     sum += number;
//   }

//   return sum;
// }

// alert(sumInput());

/* --------------------------------  */

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)

// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0

// Please try to think of a fast solution: O(n2) or even O(n) if you can.

function getMaxSubSum(arr) {
  let currentSum = 0;
  let max = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   let sum = 0;
  //   for (let j = i; j < arr.length; j++) {
  //     sum += arr[j];
  //     if (sum > max) max = sum;
  //   }
  // }
  // This is O(n^2)

  for (let number of arr) {
    currentSum = Math.max(0, (currentSum += number));
    max = Math.max(currentSum, max);
  }
  return max;
}
// Solution using Kadane's algorithm. Complexity O(n)

// getMaxSubSum([100, -9, 2, -3, 5]);

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */
