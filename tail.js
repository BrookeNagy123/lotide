const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: ${actual} !==  ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length > 1) {
    let newArr = arr.slice(1);
    return newArr;
  }
};


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!