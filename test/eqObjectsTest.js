const assert = require('chai').assert.deepEqual;
const eqObjects   = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true when given two equal objects with primitive values', () => {
    const abc = { a: "1", b: "2", c: "3" };
    const bca = { b: "2", c: "3", a: "1" };
    assert(eqObjects(abc, bca), true);
  });

  it('should return false when given two unequal objects with primitive values', () => {
    const ab = { a: "1", b: "2"};
    const abc = { a: "1", b: "2", c: "3" };
    assert(eqObjects(abc, ab), false);
  });

  it('should return false when given two unequal objects with primitive values', () => {
    const abc = { a: "1", b: "0", c: "3" };
    const bca = { b: "2", c: "3", a: "1" };
    assert(eqObjects(abc, bca), false);
  });

  it('should return true when given two equal objects containing arrays', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert(eqObjects(cd, dc), true);
  });

  it('should return false when given two unequal objects containing arrays', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert(eqObjects(cd, cd2), false);
  });

  it('should return true when given two equal nested objects', () => {
    const obj1 = { a: { z: 1 }, b: 2 }
    const obj2 = { b: 2, a: { z: 1 } }
    assert(eqObjects(obj1, obj2), true);
  });

  it('should return false when given two unequal nested objects', () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 }
    const obj2 = { a: { z: 1 }, b: 2 }
    assert(eqObjects(obj1, obj2), false);
  });

  it('should return false when given two unequal nested objects', () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 }
    const obj2 = { a: 1, b: 2 }
    assert(eqObjects(obj1, obj2), false);
  });
});