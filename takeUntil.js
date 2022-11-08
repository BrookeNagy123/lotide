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


const takeUntil = function(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      results.push(array[i]);
    } else {
      return results;
    }
  }
};

// Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);

/* Expected Output
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/
