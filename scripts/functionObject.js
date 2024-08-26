// https://javascript.info/function-object#sum-with-an-arbitrary-amount-of-brackets

'use-strict';

/* --------------------------------  */

// Modify the code of makeCounter() so that the counter can also decrease and set the number:

//     counter() should return the next number (as before).
//     counter.set(value) should set the counter to value.
//     counter.decrease() should decrease the counter by 1.

// See the sandbox code for the complete usage example.

// P.S. You can use either a closure or the function property to keep the current count. Or write both variants.

function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++;
  }

  function set(value) {
    counter.count = value;
  }

  function decrease() {
    return counter.count--;
  }

  counter.count = 0;
  counter.set = set;
  counter.decrease = decrease;

  return counter;
}

/* --------------------------------  */

// Write function sum that would work like this:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

// P.S. Hint: you may need to setup custom object to primitive conversion for your function.

let sum = function total(a) {
  function f(a) {
    f.total += a;
    return f;
  }

  f.toString = function () {
    return f.total;
  };

  f.total = a;

  return f;
};

console.log(sum(1)(2)(2).toString());
/* --------------------------------  */
