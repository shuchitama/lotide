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

// Returns true if both objects have identical keys with identical values.
// otherwise returns false.
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
        return false
      };
    } else {
      if (object2[key] !== object1[key]) {
        return false;
      }
    }
  }
  return true;
};

// // TESTING PRIMITIVE VALUES ONLY
const ab = { a: "1", b: "2"};
const abc = { a: "1", b: "2", c: "3" };
const bca = { b: "2", c: "3", a: "1" };
assertEqual(eqObjects(abc, bca), true);
assertEqual(eqObjects(ab, abc), false);

// // TESTING PRIMITIVE AND ARRAY VALUES
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, dc); // => true
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

// TESTING NESTED OBJECTS
// Test : one nest, order changed
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { b: 2, a: { z: 1 } }), true);

// Test: both have nests, but not the same inner object
assertEqual(eqObjects(
  { 
    a: { y: 0, z: 1 }, 
    b: 2 
  }, 
  { a: { z: 1 }, 
    b: 2 
  }
  ), false);

assertEqual(eqObjects(
  { a: { y: 0, z: 1 },
    b: 2 }, 
  { a: 1, 
    b: 2 }
    ), false);