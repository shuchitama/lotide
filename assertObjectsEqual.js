const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`✅ Assertion Passed: [${inspect(object1)}] === [${inspect(object2)}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${inspect(object1)}] !== [${inspect(object2)}]`);
  }
};

module.exports = assertObjectsEqual;

//TEST CODE
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
const abc = { a: "1", b: "2", c: "3" };
const bca = { b: "2", c: "3", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba); // => pass
assertObjectsEqual(ab, abc); // => fail
assertObjectsEqual(abc, bca); // => pass
assertObjectsEqual(cd, dc); // => pass
assertObjectsEqual(cd, cd2); // => fail
assertObjectsEqual(dc, cd2); // => fail
