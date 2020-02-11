const assert = require('chai').assert.deepEqual;
const without   = require('../without');

describe('#without', () => {
  it('should support arrays with only numbers', () => {
    assert((without([1, 2, 3], [1])), [2, 3]);
  });

  it('should support arrays with strings', () => {
    assert((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]);
  });

  it('should support arrays with repeated values', () => {
    assert((without([1, 2, 3, 2, 5, 1], [2, 5])), [1, 3, 1]);
  });

  it('should return original array if [] is passed in as the itemsToRemove', () => {
    assert((without([1, 2, 3], [])), [1, 2, 3]);
  });

  it('should support arrays with strings', () => {
    const words = ["hello", "world", "lighthouse"];
    without(["hello", "world", "lighthouse"], ["lighthouse"]);
    assert(words, ["hello", "world", "lighthouse"]);
  });
});



