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

const assertArraysEqual = function(arrOne, arrTwo) {
  let arraysEqual = eqArrays(arrOne, arrTwo);
  if (arraysEqual === true) {
    console.log(`✅: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`❌: ${arrOne} !==  ${arrTwo}`);
  }
};

// A function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.

const flatten = function(array) {
  let arr = [];
  array.forEach((element) => {
    // Loop the array. If the array has a nested array flatten it.
    if (Array.isArray(element)) {
      arr = arr.concat(flatten(element));
      //If there is no nested array push the element.
    } else {
      arr.push(element);
    }
  });
  return arr;
};

const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
console.log(flatten(array));

module.exports = flatten;