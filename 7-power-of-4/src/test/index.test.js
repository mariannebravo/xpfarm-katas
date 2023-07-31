const { power_of_4 } = require('../index');

describe('Power of 4', () => {

  it("should return false when the input type is 'a'", () => {
    expect(power_of_4('a')).toBeFalsy;
  });
});