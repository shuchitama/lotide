const assert = require('chai').assert.deepEqual;
const eqArrays = require('../eqArray');

describe('#assertArraysEqual', () => {
  it('should return true when given two equal arrays containing numbers', () => {
    assert(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('should return true when given two equal arrays containing strings', () => {
    assert(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('should return false when given two arrays containing the same numbers in different order', () => {
    assert(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('should return false when given two unequal arrays containing different data types', () => {
    assert(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it('should return false when given two arrays with different lengths', () => {
    assert(eqArrays(["1", "2", "3", "4"], ["1", "2", "3"]), false);
  });

  it('should return true when given two equal nested arrays', () => {
    assert(eqArrays([[2, 3] ,[4]], [[2, 3] ,[4]]), true);
  });

  it('should return true when given two equal arrays with multiple layers of nesting', () => {
    assert(eqArrays([[2, 3, [5, 8, [0]]] ,[4]], [[2, 3, [5, 8, [0]]] ,[4]]), true);
  });

  it('should return false when given two unequal nested arrays', () => {
    assert(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('should return false when given two unequal nested arrays', () => {
    assert(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});
