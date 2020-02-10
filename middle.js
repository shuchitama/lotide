const middle = function(array) {
  let output = [];
  let midIndex = Math.floor((array.length - 1) / 2);
  if (array.length > 2) {
    output.push(array[midIndex]);
    if (array.length % 2 === 0) {
      output.push(array[midIndex + 1]);
    }
  }
  return output;
};

module.exports = middle;