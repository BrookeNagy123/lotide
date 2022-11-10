
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

// A function that takes in a string and returns all indices of letter positions in the string.

const letterPositions = function(sentence) {
  let results = {};
  // Loop the sentence.
  for (let i = 0; i < sentence.length; i++) {
    //Ignore the spaces.
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
      //Help from Mentor below the ... means to copy from the array and then add the i to it).
        results[sentence[i]] = [...results[sentence[i]], i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

module.exports = letterPositions;
