const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const result = [];
  for (const element of array) {
    if(!callback(element)){
      result.push(element);
    } else {
    return result;
    }
  }
  return result;
};

module.exports = takeUntil;
