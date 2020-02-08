const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (typeof object1[key] === 'object') {
      if (object2[key] !== undefined &&
          typeof object2[key] === 'object' &&
          !Array.isArray(object2[key])) {
        if (eqObjects(object1[key], object2[key]) === false) {
          return false;
        }
      } else {
        return false;
      }
    } else {
      if (object2[key] !== object1[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`✅ Assertion Passed: [${inspect(object1)}] === [${inspect(object2)}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${inspect(object1)}] !== [${inspect(object2)}]`);
  }
};

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
