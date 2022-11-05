
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

const letterPositions = function(sentence) {
  let results = {};
  for(let i = 0; i < sentence.length; i++){
  if (sentence[i] !== " ") {
    if(!results[sentence[i]]){
      results[sentence[i]] = [i];
    } else {
      //Help from Mentor Below the ... means to copy from the array and then add the i to it)
      results[sentence[i]] = [...results[sentence[i]], i]
  }
 }
}
  return results;
};

console.log(letterPositions("lighthouse in the house"));


