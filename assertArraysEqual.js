const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// A function that takes in 2 arrays and returns true if they are equal and false otherwise.

const assertArraysEqual = function(arrOne, arrTwo) {
  // Using eqArrays function.
  let arraysEqual = eqArrays(arrOne, arrTwo);
  if (arraysEqual === true) {
    console.log(`✅: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`❌: ${arrOne} !==  ${arrTwo}`);
  }
};

module.exports = assertArraysEqual;


