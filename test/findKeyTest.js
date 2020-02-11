const assert = require('chai').assert.deepEqual;
const findKey = require('../findKey');

describe('#findKey', () => {
  it('should return correct output when given an object and a function', () => {
    const obj1 =
    {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert(findKey(obj1, x => x.stars === 2), "noma");
  });

  it('should return undefined when no key returns truthy value for the function and given object', () => {
    const obj2 = {
      sci_fi: "Doctor Who",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
      };
    assert(findKey(obj2, x => x === "Sherlock"), undefined);
  });
  
  it('should return undefined when empty object is passed in', () => {
    const obj = {};
    assert(findKey(obj, x => x < 0), undefined);
  });
  
});