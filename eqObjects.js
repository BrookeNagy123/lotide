const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(arrOne,arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i <= arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

// A function that takes in 2 objects and return true if they are equal and false otherwise.

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  //If the length of the keys do not match return false.
  if (keys1.length !== keys2.length) {
    return false;
  } //Otherwise loop the keys.
  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    //If the key is an array pass it to eqArrays function to handle. Continue to check if keys match.
    if (Array.isArray(val1) || Array.isArray(val2)) {
      return eqArrays(val1, val2);
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); //=> false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;