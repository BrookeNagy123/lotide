const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: ${actual} !==  ${expected}`);
  }
};


const countLetters = function(strings) {
  const results = {};
  for (const string of strings) {
    if (string !== " ") {
      if (results[string]) {
        results[string] += 1;
      } else {
        results[string] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));