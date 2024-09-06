// https://javascript.info/bind

'use-strict';

/* --------------------------------  */

// What will be the output?

// function f() {
//   console.log(this); // ?
// }

// let user = {
//   g: f.bind(null),
// };

// user.g();

// Solution
/**
 * The program will return an null pointer error because the function user.g() now has no context from user object // Wrong
 *
 * "This" context of function f() is not the user object because it is set to null. The function will look to the global object in node.js instead(or window object on web browser).
 */

// Website's solution
//The context of a bound function is hard-fixed. There’s just no way to further change it.
// So even while we run user.g(), the original function is called with this=null.
/* --------------------------------  */

// Can we change this by additional binding?

// What will be the output?

function f() {
  console.log(this.name);
}

f = f.bind({ name: 'John' }).bind({ name: 'Ann' });

f();

// Solution
/**
 * no. Once the function is bound, it can not be rebound
 */

/* --------------------------------  */
// Fix a function that loses "this"
// https://javascript.info/task/question-use-bind

// Solution
// function askPassword(ok, fail) {
//   let password = prompt('Password?', '');
//   if (password == 'rockstar') ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

/* --------------------------------  */
// Partial application for login
// https://javascript.info/bind#partial-application-for-login

function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert(this.name + (result ? ' logged in' : ' failed to log in'));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */
