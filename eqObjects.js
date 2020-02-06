const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Returns true if both objects have identical keys with identical values.
// otherwise returns false.
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  };
  for (const key in object1) {
    if (object2[key] !== object1[key]) {return false};
  }
  return true;
};

const ab = { a: "1", b: "2"};
const abc = { a: "1", b: "2", c: "3" };
const bca = { b: "2", c: "3", a: "1" };
assertEqual(eqObjects(abc, bca), true); 
assertEqual(eqObjects(ab, abc), false);
