const assertArraysEqual = require('./assertEqual');

const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      output.push(source[i]);
    }
  }
  return output;
}

module.exports = without;

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]);
assertArraysEqual((without([1, 2, 3, 2, 5, 1], [2, 5])), [1, 3, 1]);
assertArraysEqual((without([1, 2, 3], [])), [1, 2, 3]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);