const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["d", "e", "l", "y", "p", "u"];
const words2 = []
const arrays = [[3, "hi", true], ["a", "b", "c", "d"], "yes", "no"];
console.log(arrays[0]);

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);
const results3 = map(words2, word => word[0]);
const results4 = map(arrays, word => word[0])

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ["d", "e", "l", "y", "p", "u"]);
assertArraysEqual(results3, []);
assertArraysEqual(results4, [3, "a", "y", "n"]);
