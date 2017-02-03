describe("Minimum", function() {
  it("Get the minimum of two numbers", function() {
    expect(minimum(2, 3)).toEqual(2);
  });
});

describe("isEven", function() {
  it("should say a number is even or not", function() {
    expect(isEven(2)).toEqual(true);
  });
});

describe("countChar", function() {
  it("should count the characters", function() {
    expect(countChar("aBaBaBB", "B")).toEqual(4);
  });
});

describe("countBs", function() {
  it("should count the 'B' characters", function() {
    expect(countBs("aBaBaBB")).toEqual(4);
  });
});