const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const tail = function(array) {
  return array.slice(1);
};

// TEST CODE

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
const ords = tail(words);
assertEqual(ords[0], "Lighthouse");
assertEqual(ords[1], "Labs");

const oneElement = ["1"];
console.log(tail(oneElement));

const empty = [];
console.log(tail(empty));
