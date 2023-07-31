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

  it("should return true when the input type is 16", () => {
    expect(power_of_4(16)).toBeTruth;
  });

  it("should return true when the input type is 32", () => {
    expect(power_of_4(32)).toBeTruth;
  });

  it("should return false when the input type is 44", () => {
    expect(power_of_4(44)).toBeTruth;
  });
});