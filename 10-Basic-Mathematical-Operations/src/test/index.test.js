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

  it("should return the div of the items inputed ('/', 2, 2)", () => {
    expect(math_operations('/', 2, 2)).toStrictEqual(1);
  });

  it("should return the sub of the items inputed ('-', 50, 1)", () => {
    expect(math_operations('-', 50, 1)).toStrictEqual(49)
  })

  it("should return the mult of the items inputed ('*', 5, 5)", () => {
    expect(math_operations('*', 5, 5)).toStrictEqual(25);
  });

});