// https://javascript.info/object-methods

"use strict";

/* --------------------------------  */

// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user);
// alert(user.ref.name); // What's the result?

// in strict mode, the result is an uncaught TypeError where user.ref is undefined

// this is the case because

/* --------------------------------  */

// Create an object calculator with three methods:

//     read() prompts for two values and saves them as object properties with names a and b respectively.
//     sum() returns the sum of saved values.
//     mul() multiplies saved values and returns the result.

// let calculator = {
//   read() {
//     this.a = +prompt("Enter a", 0);
//     this.b = +prompt("Enter b", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

/* --------------------------------  */

// There’s a ladder object that allows you to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function () {
//     // shows the current step
//     alert(this.step);
//   },
// };

// Now, if we need to make several calls in sequence, we can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// Modify the code of up, down, and showStep to make the calls chainable, like this:

// Modified object:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
    return this;
  },
};

// Explaination(v1): The first up() in the chain is 'looks' can 'see' the object where it is called, the second up() can only see 'ladder.up()' this is not an object therfore nothing will happen and so on

// Explaination(v2): The method call chain works from left to right. If the object methods don't have explicit return statements, they will return undefined. That means each successive method calls after the first they essentially being called by an undefined object, leading to TypeError

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

/* --------------------------------  */

/* --------------------------------  */
