const assertEqual = require('./assertEqual');

// A function that takes in an array and returns the first element in the array.

const head = function(arr) {
  // If the array length does not equal zero return the first index of the array, which is arr[0].
  if (arr.length !== 0) {
    return arr[0];
  } else {
  // If the array length is equal to zero return undefined.
    return undefined;
  }
};

module.exports = head;
