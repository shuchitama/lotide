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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

console.log('---');

const data3 = [1, 3, 5, 2, 7, 8, 4, 6, 9, 0];
const results3 = takeUntil(data3, x => x > 10);
console.log(results3);
assertArraysEqual(results3, [1, 3, 5, 2, 7, 8, 4, 6, 9, 0]);

console.log('---');

const data4 = [];
const results4 = takeUntil(data4, x => x > 10);
// console.log(results4);
assertArraysEqual(results4, []);
