const assert = require('chai').assert.deepEqual;
const flatten   = require('../flatten');

describe('#flatten', () => {
  it('should return [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]', () => {
    assert(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('should return [1, 2, 3, 4] when given [1, 2, 3, 4]', () => {
    assert(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);
  });
});