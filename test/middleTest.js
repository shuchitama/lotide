const assertDeepEqual = require('chai').assert.deepEqual;
const middle = require('../middle');

describe("#middle", () => {
  it("should return [] for []", () => {
    const array = [];
    const midArray = middle(array);
    assertDeepEqual(midArray, []);
  });

  it("should return [] for [1]", () => {
    const array = [1];
    const midArray = middle(array);
    assertDeepEqual(midArray, []);
  });

  it("should return [] for [1, 2]", () => {
    const array = [1, 2];
    const midArray = middle(array);
    assertDeepEqual(midArray, []);
  });

  it("should return [2] for [1, 2, 3]", () => {
    const array = [1, 2, 3];
    const midArray = middle(array);
    assertDeepEqual(midArray, [2]);
  });

  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    const array = [1, 2, 3, 4];
    const midArray = middle(array);
    assertDeepEqual(midArray, [2, 3]);
  });

  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    const array = [1, 2, 3, 4, 5];
    const midArray = middle(array);
    assertDeepEqual(midArray, [3]);
  });

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const midArray = middle(array);
    assertDeepEqual(midArray, [3, 4]);
  });
});