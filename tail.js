const assertEqual = require('./assertEqual');

// A function that takes in an array and returns everything except the first element of the array.

const tail = function(arr) {
  //If the array length is greater than 1, create a new array that slices at index 1 and returns the "tail" of the array.
  if (arr.length > 1) {
    let newArr = arr.slice(1);
    return newArr;
  }
};

module.exports = tail;

