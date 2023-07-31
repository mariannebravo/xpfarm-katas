const { sum_values, diagonals_sum } = require('../index');

describe('Diagonals Sum', () => {

  describe('Sum Values', () => {

    it('should return the sum of a single array [1, 1, 1]', () => {
      expect(sum_values([1, 1, 1])).toStrictEqual(3);
    });

    it('should return the sum of a single array [2, 2, 2]', () => {
      expect(sum_values([2, 2, 2])).toStrictEqual(6);
    });

    it('should return the sum of a single array [3, 3, 3]', () => {
      expect(sum_values([3, 3, 3])).toStrictEqual(9);
    });
  });

  describe('Diagonals Sum', () => {

    it('should return the sum of the diagonal inputed [[1, 1, 1], [1, 1, 1], [1, 1, 1]]', () => {
      const diag = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ];

      expect(diagonals_sum(diag)).toStrictEqual(9);
    });
  });
});