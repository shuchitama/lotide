const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["d", "e", "l", "y", "p", "u"];
const words2 = []
const arrays = [[3, "hi", true], ["a", "b", "c", "d"], "yes", "no"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);
const results3 = map(words2, word => word[0]);
const results4 = map(arrays, word => word[0])

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ["d", "e", "l", "y", "p", "u"]);
assertArraysEqual(results3, []);
assertArraysEqual(results4, [3, "a", "y", "n"]);
