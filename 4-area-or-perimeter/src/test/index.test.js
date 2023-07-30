const { area_or_perimeter } = require('../index');

describe('Are or Primeter', () => {

  it('should return \'area\' when the numbers (6, 10) are given', () => {
    expect(area_or_perimeter(6, 10)).toStrictEqual('area')
  });

  it('should return \'perimeter\' when the number (3, 3) are given', () => {
    expect(area_or_perimeter(3, 3)).toStrictEqual('perimeter')
  });
});