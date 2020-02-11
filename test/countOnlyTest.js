const assert = require('chai').assert.deepEqual;
const countOnly   = require('../countOnly');

describe('#countOnly', () => {
  it('should return correct object with word count when given an array', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    const expected = { "Jason": 1, "Fang": 2 };
    assert(actual, expected);
  })
})