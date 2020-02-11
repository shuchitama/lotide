const assert = require('chai').assert.deepEqual;
const countLetters   = require('../countLetters');

describe('#countLetters', () => {
  it('should return correct object with letter count when given "lighthouse in the house"', () => {
    const actual = countLetters("lighthouse in the house");
    const expected = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1
    };
    assert(actual, expected);
  });
});