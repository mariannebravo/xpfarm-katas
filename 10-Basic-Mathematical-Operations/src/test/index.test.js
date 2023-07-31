const { math_operations } = require('../index');

describe('Math Operations', () => {

  it("should return the sum of the items inputed ('+', 1, 1)", () => {
    expect(math_operations('+', 1, 1)).toStrictEqual(2);
  });

  it("should return the sub of the items inputed ('-', 1, 1)", () => {
    expect(math_operations('-', 1, 1)).toStrictEqual(0);
  });

  it("should return the mult of the items inputed ('*', 2, 2)", () => {
    expect(math_operations('*', 2, 2)).toStrictEqual(4);
  })

});