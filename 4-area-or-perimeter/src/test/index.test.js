const { area_or_perimeter } = require('../index');

describe('Are or Primeter', () => {

  it('should return \'area\' when the numbers (6, 10) are given', () => {
    expect(area_or_perimeter(6, 10)).toStrictEqual('area')
  });
});