// https://javascript.info/object

/* --------------------------------  */

// Write the code, one line for each action:

//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.

// var user = {};

// user.name = "John";
// console.log(user.name);

// user["surname"] = "Smith";
// console.log(user.surname);

// user["name"] = "Pete";
// console.log(user.name);

// console.log("name" in user);
// delete user.name;
// console.log("name" in user);

/* --------------------------------  */

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    // if block is not needed since if there a key in obj then the loop will start else it will skip
    // if (key) {
    //   return false;
    // }
    return false;
  }
  return true;
}

// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false

/* --------------------------------  */

// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

// var sumSalaries = 0;

// if (isEmpty(salaries)) {
//   console.log(0);
// } else {
//   for (let key in salaries) {
//     sumSalaries += salaries[key];
//   }
//   console.log(sumSalaries);
// }

/* --------------------------------  */

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    } else {
      continue;
    }
  }
}

console.log(menu);

multiplyNumeric(menu);

console.log(menu);

/* --------------------------------  */

/* --------------------------------  */
