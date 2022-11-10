const assertEqual = require('./assertEqual');

// A function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.

const eqArrays = function(arrOne,arrTwo) {
  //If the array lengths do not match return false.
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    //Otherwise if array lengths match loop the array and see of the index for each array matches.
    for (let i = 0; i <= arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqArrays;

