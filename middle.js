const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// A function that takes in an array and returns middle most element of the array.

const middle = function(arr) {
  let middleOne = [];
  let middleTwo = [];
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    // Loop the array, if array length is less than or equal to 2, return an empty array.
    if (arr.length <= 2) {
      results = [];
    } else if (arr.length % 2 === 0) {
      // If the array length is even, then return find the two middle indexes.
      middleOne = Math.floor((arr.length / 2) - 1);
      let middleArrOne = [arr[middleOne]];
      middleTwo = Math.floor(arr.length  / 2);
      let middleArrTwo = [arr[middleTwo]];
      results = middleArrOne.concat(middleArrTwo);
    } else {
      // If the array length is odd, then return the one middle index.
      middleOne = Math.floor(arr.length / 2);
      results = [arr[middleOne]];
    }
  }
  return results;
};

module.exports = middle;


