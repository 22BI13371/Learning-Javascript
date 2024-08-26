// https://javascript.info/variables

"use strict";

let admin,
  name = "John";

admin = name;

document.write(admin);

let homePlanet = "Earth",
  curVisitor;

function someCode(birthday) {
  return birthday;
}

// Uppaercase const to denote unchanging nature
const BIRTHDAY = "15.05.2004";
// Lowercase const bacause it is assigned initially
const age = someCode(birthday);
