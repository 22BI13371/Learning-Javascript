// https://javascript.info/settimeout-setinterval#settimeout

'use-strict';

/* --------------------------------  */

// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

//     Using setInterval.
//     Using nested setTimeout.

// Solution
// Using nested setTimeout
function printNumbers(from, to) {
  let timerId = setTimeout(function tick() {
    console.log(from);

    if (from < to) {
      timerId = setTimeout(tick, 1000);
    }

    from++;
  }, 1000);
}

// Using setInterval
// function printNumbers(from, to) {
//   let timerId = setInterval(() => {
//     console.log(from++);

//     if (from == to + 1) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// }

// printNumbers(1, 5);

/* --------------------------------  */

// In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

// When will the scheduled function run?

//     After the loop.
//     Before the loop.
//     In the beginning of the loop.

// What is alert going to show?

// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // assume that the time to execute this function is >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }

// Solution
/**
 * The scheduler will only invoke the function after the current running script. Therefore, the scheduled function will only run ***After the loop***
 *
 * The alert will show 100000000
 */

/* --------------------------------  */
