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

const middle = function(arr){
  let middleOne = [];
  let middleTwo = [];
  let results = [];
  for(let i = 0; i < arr.length; i++){
  if(arr.length <= 2){
    results = [];
  } else if(arr.length % 2 === 0){
    middleOne = Math.floor((arr.length / 2) -1 );
    middleArrOne = [arr[middleOne]];
    middleTwo = Math.floor(arr.length  / 2)
    middleArrTwo = [arr[middleTwo]];
    results = middleArrOne.concat(middleArrTwo);
  } else {
    middleOne = Math.floor(arr.length / 2);
    results = [arr[middleOne]]
    }
  }
  return results
}


/* Test Cases */ 

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

