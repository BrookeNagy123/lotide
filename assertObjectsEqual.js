const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: ${actual} !==  ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2)

  if(keys1.length !== keys2.length){
    return false;
  } 
  for(let key of keys1){
    const val1 = object1[key];
    const val2 = object2[key];
    if(Array.isArray(val1) || Array.isArray(val2)){
      return eqArrays(val1, val2);
    } else if (val1 !== val2){
      return false;
    } 
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let objectsEqual = eqObjects(actual, expected)
  if( objectsEqual === true){
    console.log(`✅: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌: ${inspect(actual)} !==  ${inspect(expected)}`);
  }
  
};


console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
console.log(assertObjectsEqual({ a: '1', b: 2 }, { c: "1", d: ["2", 3, 4] }));
