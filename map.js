
// A function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.

const map = function(array, callback) {
  const results = [];
  //Loop the array.
  for (let item of array) {
    //Push the item to results based on the callback criteria.
    results.push(callback(item));
  }
  return results;
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

const assertArraysEqual = function(arrOne, arrTwo) {
  let arraysEqual = eqArrays(arrOne, arrTwo);
  if (arraysEqual === true) {
    console.log(`✅: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`❌: ${arrOne} !==  ${arrTwo}`);
  }
};

module.exports = map;

/* Further Test Cases Needed
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

*/



