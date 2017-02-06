describe("Test filter function", function() {
  it("Should return the children of Carel Haverbeke ", function() {
    expect(childernOfHaverbeke).toEqual( [{ name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905, father: 'Carel Haverbeke', mother: 'Maria van Brussel' }]);
  });
});


describe("Flatten", function() {
  it("Should return a flattened array containing all the elements", function() {
    expect(flatten([[1,2], [3,4]])).toEqual([1, 2, 3, 4]);
  });
});

describe("Mother-child age difference ", function() {
  it("Should return a average of age difference ", function() {
    expect(averageAgeDifference).toEqual(31.22222222222222);
  });
});

