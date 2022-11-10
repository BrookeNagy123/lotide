const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: ${actual} !==  ${expected}`);
  }
};

// A function that takes in a sentence and returns a count of each of the letters in the sentence.

const countLetters = function(strings) {
  const results = {};
  // Loop the String.
  for (const string of strings) {
    //Do not count spaces.
    if (string !== " ") {
      if (results[string]) {
        //If we have already logged results for results[string] add 1 to the count.
        results[string] += 1;
      } else {
        //If we have not logged results for results[string] make the count equal to 1.
        results[string] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"));