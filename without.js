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

//A function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  //Mentor Help Below: Filter the source. Check if the items to remove has an index of -1. If it does we do not include it in the new array.
  let newArr = source.filter((i) => itemsToRemove.indexOf(i) === -1);
  return newArr;
};


/*Test Cases Below */

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["lighthouse", "hello", "world", "lighthouse"],["lighthouse"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;