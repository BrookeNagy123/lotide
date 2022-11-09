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

const flatten = function(array) {
  let arr = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      arr = arr.concat(flatten(element));
    } else {
      arr.push(element);
    }
  });
  return arr;
};

const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
console.log(flatten(array));

module.exports = flatten;