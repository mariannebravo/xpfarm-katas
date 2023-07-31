const { two_nums_positive } = require('../index');

describe('Two numbers are positive', () => {

  it('should return false when the numbers (-1, -1, -1) are inputed', () => {
    expect(two_nums_positive([-1, -1, -1])).toBe(false);
  });
});