const assert = require('chai').assert.deepEqual;
const takeUntil   = require('../takeUntil');

describe('#letterPositions', () => {
  it('should return correct output when given an array and a callback', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert(results1, [ 1, 2, 5, 7, 2 ]);
  });

  it('should return correct output when given an array and a callback', () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

  it('should return correct output when given an array and a callback', () => {
    const data3 = [1, 3, 5, 2, 7, 8, 4, 6, 9, 0];
    const results3 = takeUntil(data3, x => x > 10);
    assert(results3, [1, 3, 5, 2, 7, 8, 4, 6, 9, 0]);
  });

  it('should return correct output when given an array and a callback', () => {
    const data4 = [];
    const results4 = takeUntil(data4, x => x > 10);
    assert(results4, []);
  });
});
