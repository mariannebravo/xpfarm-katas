const { sum_values } = require('../index');

describe('Diagonals Sum', () => {

  describe('Sum Values', () => {

    it('should return the sum of a single array values', () => {
      expect(sum_values([1, 1, 1])).toStrictEqual(3);
    });
  })
});