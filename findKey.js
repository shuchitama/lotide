const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    console.log(key);
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

const obj1 =
  {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

assertEqual(findKey(obj1, x => x.stars === 2), "noma");


const obj2 = {
  sci_fi: "Doctor Who",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKey(obj2, x => x === "Sherlock"), undefined);


const obj3 = {};
assertEqual(findKey(obj3, x => x < 0), undefined);