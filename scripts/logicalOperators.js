// https://javascript.info/logical-operators

/* --------------------------------  */

// alert( null || 2 || undefined ); -> 2

/* --------------------------------  */

// alert(alert(1) || 2 || alert(3)); // -> 1

/* --------------------------------  */

// alert( 1 && null && 2 ); -> null

/* --------------------------------  */

// alert( alert(1) && alert(2) ); -> 1

/* --------------------------------  */

// alert( null || 2 && 3 || 4 ); -> 3

/* --------------------------------  */
// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

// let age = +prompt("Enter age", "0");
// let age = 15;

// if (14 <= age && age <= 90) {
//   alert("age is valid");
// } else {
//   alert("age is not valid");
// }

/* --------------------------------  */
// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

// let age = +prompt("Enter age", "0");
// let age = 15;

// ver1
// if (!(14 < age) || !(age < 90)) {
//   alert("age is valid");
// } else {
//   alert("age is not valid");
// }

// ver2
// if (14 >= age || age >= 90) {
//   alert("age is valid");
// } else {
//   alert("age is not valid");
// }

/* --------------------------------  */
// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

// if (-1 || 0) alert( 'first' ); -> yes, true
// if (-1 && 0) alert("second"); // -> no, false
// if (null || (-1 && 1)) alert("third"); // -> yes, true

/* --------------------------------  */
// https://javascript.info/task/check-login

let username = prompt("Username", "");
let password;

if (username == "Admin") {
  password = prompt("Password", "");

  if (password == "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (username === "" || username === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */
