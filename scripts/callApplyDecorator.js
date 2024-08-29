// https://javascript.info/call-apply-decorators

'use-strict';

/* --------------------------------  */
// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.

// For instance:

// function work(a, b) {
//   alert( a + b ); // work is an arbitrary function or method
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// P.S. That decorator is sometimes useful for unit-testing. Its advanced form is sinon.spy in Sinon.JS library.

// Solution

function work(a, b) {
  return a + b;
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    let result = func.apply(this, args);

    return result;
  }

  wrapper.calls = [];

  return wrapper;
}

// work = spy(work);

// work(1, 2);
// work(2, 3);

// console.log(work.calls);
// for (let args of work.calls) {
//   console.log('call:' + args.join()); // "call:1,2", "call:4,5"
// }
/* --------------------------------  */

// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

// For instance:

// function f(x) {
//   alert(x);
// }

// // create wrappers
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // shows "test" after 1000ms
// f1500("test"); // shows "test" after 1500ms

// In other words, delay(f, ms) returns a "delayed by ms" variant of f.

// In the code above, f is a function of a single argument, but your solution should pass all arguments and the context this.

function delay(f, ms) {
  function wrapper(...args) {
    let timerId = setTimeout(() => {
      return f.apply(this, args);
    }, ms);
  }

  return wrapper;
}

// let user = {
//   name: 'name',

//   sayHi: function (phrase) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// user.sayHi = delay(user.sayHi, 1500);
// user.sayHi('hello');
/* --------------------------------  */
// Debounce decorator
// https://javascript.info/call-apply-decorators#debounce-decorator

// Solution
// Works but long

// function debounce(f, ms) {
//   let timerId;

//   function wrapper(...args) {
//     if (timerId) {
//       clearTimeout(timerId);
//       timerId = setTimeout(() => {
//         f.apply(this, args);
//       }, ms);

//       return;
//     }

//     timerId = setTimeout(() => {
//       f.apply(this, args);
//     }, ms);
//   }

//   return wrapper;
// }

// Shorter (Website's solution)
function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

// function f(phrase) {
//   console.log(phrase);
// }

// f = debounce(f, 5000);

// f('a');
// setTimeout(() => f('b'), 1000);
// setTimeout(() => f('c'), 3000);
/* --------------------------------  */
// Throttle decorator
// https://javascript.info/call-apply-decorators#throttle-decorator

// function throttle(func, ms) {
//   let timer = new Date().getTime();
//   let internalTimerId;

//   function wrapper() {}

//   return wrapper;
// }

// function f(phrase) {
//   console.log(phrase);
// }

// Website's solution
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    isThrottled = true;

    func.apply(this, arguments); // (1)

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

f = throttle(f, 1000);

f('a');
setTimeout(() => f('b'), 100);
setTimeout(() => f('d'), 500);
setTimeout(() => f('e'), 400);
/* --------------------------------  */
