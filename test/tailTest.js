const assertDeepEqual = require('chai').assert.deepEqual;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assertDeepEqual(tail(words), ['Lighthouse', 'Labs']);
    require('chai').assert(words.length, 3);
  });

  it("does not change original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const tailWords = (tail(words));
    require('chai').assert(words.length, 3);
  });

  it("returns [] for ['1']", () => {
    const oneElement = ["1"];
    assertDeepEqual(tail(oneElement), []);
  });

  it("returns [] for []", () => {
    const empty = [];
    assertDeepEqual(tail(empty), []);
  });

})

// const empty = [];
// console.log(tail(empty));
