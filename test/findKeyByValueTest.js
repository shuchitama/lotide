const assert = require('chai').assert.deepEqual;
const findKeyByValue   = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('should return correct key when passed in an object and a value', () => {
    const bestTVShowsByGenre = {
      sci_fi: "Doctor Who",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return correct key when passed in an object and a value', () => {
    const bestTVShowsByGenre = {
      sci_fi: "Doctor Who",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert(findKeyByValue(bestTVShowsByGenre, "Doctor Who"), "sci_fi");
  });

  it('should return correct key when passed in an object and a value', () => {
    const bestTVShowsByGenre = {
      sci_fi: "Doctor Who",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it('should return correct key when passed in an object and a value', () => {
    const bestTVShowsByGenre = {
      sci_fi: "Doctor Who",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});

