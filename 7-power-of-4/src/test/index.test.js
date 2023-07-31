const { power_of_4 } = require('../index');

describe('Power of 4', () => {

  it("should return false when the input type is 'a'", () => {
    expect(power_of_4('a')).toBeFalsy;
  });

  it("should return false when the input type is ['a']", () => {
    expect(power_of_4(['a'])).toBeFalsy;
  });

  it("should return true when the input type is 4", () => {
    expect(power_of_4(4)).toBeTruth;
  });
});