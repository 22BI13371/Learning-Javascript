// https://javascript.info/comparison

5 > 4; // -> true
"apple" > "pineapple"; // -> false
"2" > "12"; // -> false
undefined == null; // -> true
undefined === null; // -> false
null == "\n0\n"; // -> true incorrect -> false
// becasuse null only equals to itself or undefined

null === +"\n0\n"; // -> false
