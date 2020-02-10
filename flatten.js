const eqArrays = require('./eqArray');

const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(mainArray) {
  let output = [];
  for (let i = 0; i < mainArray.length; i++) {
    if (Array.isArray(mainArray[i])) {
      for (let j = 0; j < mainArray[i].length; j++) {
        output.push(mainArray[i][j]);
      }
    } else {
      output.push(mainArray[i])
    }
  }
  return output;
};

module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);