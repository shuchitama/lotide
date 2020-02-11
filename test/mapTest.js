const assert = require('chai').assert.deepEqual;
const map   = require('../map');

describe('#map', () => {
  it('should return correct output when given an array of words and a function to map', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert(results1, ['g', 'c', 't', 'm', 't' ]);
  });

  it('should return correct output when given an array of single letters and a function to map', () => {
    const words = ["d", "e", "l", "y", "p", "u"];
    const results1 = map(words, word => word[0]);
    assert(results1, ["d", "e", "l", "y", "p", "u"]);
  });

  it('should return empty array when given an empty array and a function to map', () => {
    const words = [];
    const results1 = map(words, word => word[0]);
    assert(results1, []);
  });

  it('should return correct output when given nested arrays and a function to map', () => {
    const arrays = [[3, "hi", true], ["a", "b", "c", "d"], "yes", "no"];
    const results1 = map(arrays, word => word[0]);
    assert(results1, [3, "a", "y", "n"]);
  });
});