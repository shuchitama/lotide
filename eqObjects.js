const eqArrays = require('./eqArray');

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

module.exports = eqObjects;