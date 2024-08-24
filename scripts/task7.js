// https://javascript.info/ifelse

/* --------------------------------  */

// if ("0") {
//   alert("hello");
// }

/* --------------------------------  */

// let jsName = prompt("What is the 'official' name of JavaScript", '');

// if (jsName.toLowerCase() == "ECMAScript".toLowerCase()) {
//   alert("Right1");
// } else {
//   alert("You don't know? 'ECMAScript'!");
// }

/* --------------------------------  */

// let inputNumber = +prompt("Enter a value", "");

// if (inputNumber > 0) {
//   alert(1);
// } else if (inputNumber < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

/* --------------------------------  */

// let result;

// if (a  + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }
// ->

// prettier-ignore
let result = ((a + b) < 4) ? "Below" : "Over";

/* --------------------------------  */
// prettier-ignore
let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' : 
    (login == '') ? 'No login' :
    '';
