const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let middleOne = [];
  let middleTwo = [];
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length <= 2) {
      results = [];
    } else if (arr.length % 2 === 0) {
      middleOne = Math.floor((arr.length / 2) - 1);
      let middleArrOne = [arr[middleOne]];
      middleTwo = Math.floor(arr.length  / 2);
      let middleArrTwo = [arr[middleTwo]];
      results = middleArrOne.concat(middleArrTwo);
    } else {
      middleOne = Math.floor(arr.length / 2);
      results = [arr[middleOne]];
    }
  }
  return results;
};

module.exports = middle;


