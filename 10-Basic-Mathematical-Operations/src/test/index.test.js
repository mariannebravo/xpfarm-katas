const { math_operations } = require('../index');

describe('Math Operations', () => {

  it('should return the sum of the items inputed (' + ', 1, 1)', () => {
    expect(math_operations('+', 1, 1)).toStrictEqual(2);
  });
});