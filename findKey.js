const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: ${actual} !==  ${expected}`);
  }
};

// A function that takes in an object and callback and returns the first key that meets the criteria specified in callback.

const findKey = function(object, callback) {
  //Loop the keys.
  for (let key in object) {
    //Use the callback to evaluate if the key matches what the callback is looking for. Return the key that matches the callback criteria.
    if (callback(object[key])) {
      return key;
    }
  }
};


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

module.exports = findKey;