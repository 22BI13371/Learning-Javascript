// https://javascript.info/map-set

"use-strict";

/* --------------------------------  */

// Test

var decrement = {
  from: 20,
  to: 1,

  [Symbol.iterator]: function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.last <= this.current) {
          // prettier-ignore
          return { done: false, value: (Math.round(this.current /= 2)) };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// for (let num of decrement) {
//   console.log(num);
// }

/* --------------------------------  */

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// alert(unique(values)); // Hare, Krishna, :-O

// P.S. Here strings are used, but can be values of any type.

// P.P.S. Use Set to store unique values.

function unique(arr) {
  // Long
  // let set = new Set();

  // for (let item of arr) {
  //   set.add(item);
  // }

  // return set;

  // Shorter
  return Array.from(new Set(arr));
}

// // Using spread operator (have not showed up in the website up to this point)
// function unique(arr) {
//   return [...new Set(arr)];
// }

/* --------------------------------  */

// Anagrams are words that have the same number of same letters, but in different order.

// For instance:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Write a function aclean(arr) that returns an array cleaned from anagrams.

// For instance:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

// From every anagram group should remain only one word, no matter which one.

function aclean(arr) {
  let aclean = new Map();
  // prettier-ignore
  let strSumArr = arr.map((str) => (str.toLowerCase().split("").reduce((sum, char) => sum + char.codePointAt(0), 0)));

  arr.forEach((str, index) => {
    aclean.set(strSumArr[index], arr[index]);
  });

  return Array.from(aclean.values());
}

/* --------------------------------  */

// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

// But that doesn’t work:

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");

// Why? How can we fix the code to make keys.push work?

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
console.log(keys);
// Error: keys.push is not a function
keys.push("more");
console.log(keys);
/* The error is caused by the variable keys not being an array(it is actually a Map Iterator).
To fix this, we will use Array.from() to get an array from the map keys */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */
