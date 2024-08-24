// https://javascript.info/operators

// let a = 1,
//   b = 1;

// let c = ++a; // ? -> c = 2
// let d = b++; // ? -> d = 1
// a = b = 2;
/* --------------------------------  */

// let a = 2;

// let x = 1 + (a *= 2);
// a = 4, x = 5
/* --------------------------------  */

"" + 1 + 0; // -> "10"
"" - 1 + 0; // -> NaN incorrect -> -1
true + false; // -> 1
6 / "3"; // -> 2
"2" * "3"; // -> 6
4 + 5 + "px"; // -> "9px"
"$" + 4 + 5; // ->"$45"
"4" - 2; // -> 2
"4px" - 2; // -> NaN
"  -9  " + 5; // -> " -9 5"
"  -9  " - 5; // -> -14
null + 1; // -> 1
undefined + 1; // -> NaN
" \t \n" - 2; // -> NaN incorrect -> -2
/* --------------------------------  */

// let a = Number(prompt("First number?", 1));
// let b = Number(prompt("Second number?", 2));

// alert(a + b); // 12
/* --------------------------------  */

// alert(undefined + 1);
