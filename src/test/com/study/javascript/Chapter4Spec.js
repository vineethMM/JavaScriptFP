describe("Range", function() {
  it("returns the array of numbers in the range inclusive of boundary", function() {
    expect(range(2, 5)).toEqual([2, 3, 4, 5]);
  });

  it("returns the array of numbers in the range inclusive of boundary", function() {
    expect(range(6, 3, -1)).toEqual([6, 5, 4, 3]);
  });
});

describe("Reverse array", function() {
  it("return reversed array", function() {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });
});

describe("Reverse array", function() {
  it("return reversed array", function() {
    expect(reverseArrayInPlace([1, 2, 3])).toEqual([3, 2, 1]);
  });
});

describe("arrayToList", function() {
  it("should return list of elements from array", function() {
    expect(arrayToList([1, 2])).toEqual({value: 1, rest: {value: 2, rest: null}});
  });
});

describe("prepend", function() {
  it("should return list of elements from array", function() {
    expect(prepend({value:2, rest: null}, 1)).toEqual({value: 1, rest: {value: 2, rest: null}});
  });
});

describe("nth", function() {
  it("should return list of elements from array", function() {
    expect(nth({value:2, rest: {value: 3, rest: null}}, 2)).toEqual(3);
  });

  it("should return list of elements from array", function() {
    expect(nth({value:2, rest: {value: 3, rest: null}}, 3)).toEqual(undefined);
  });
});

describe("deepEqual", function() {
  it("should return true if both are null", function() {
    expect(deepEqual(null, null)).toEqual(true);
  });

  it("should return false if both are not equal", function() {
    expect(deepEqual(12, null)).toEqual(false);
  });
 
  it("should return true if both are equal", function() {
    expect(deepEqual({value: 1}, {value: 1})).toEqual(true);
  });

  it("should return false if both are not equal", function() {
    expect(deepEqual({value: 1, next: null}, {value: 1})).toEqual(false);
  });

  it("should return false if both are not equal", function() {
    expect(deepEqual({value: 1, next: null}, {value: 1})).toEqual(false);
  });

  it("should return false if both are not equal", function() {
    expect(deepEqual({value: 1}, {value: 1, next: null})).toEqual(false);
  });

  it("should return false if both are not equal", function() {
    expect(deepEqual({value: 1}, {value: 1, next: null})).toEqual(false);
  });

  it("should return true if both are equal", function() {
    expect(deepEqual({value: 1, next: {value: 2, next: null}}, {value: 1, next: {value: 2, next: null}})).toEqual(true);
  });

  it("should return true if both are equal", function() {
    expect(deepEqual(undefined, undefined)).toEqual(true);
  });

  it("should return true if both are equal", function() {
    expect(deepEqual(undefined, 1)).toEqual(false);
  });

});
