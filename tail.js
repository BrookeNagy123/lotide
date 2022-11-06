const assertEqual = require('./assertEqual');

const tail = function(arr) {
  if (arr.length > 1) {
    let newArr = arr.slice(1);
    return newArr;
  }
};

module.exports = tail;

