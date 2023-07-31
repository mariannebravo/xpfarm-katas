const { diagonals_sum } = require('../index');

describe('Diagonals Sum', () => {

  it('should return the sum of the diagonal inputed [[1, 1, 1], [1, 1, 1], [1, 1, 1]]', () => {
    const diag = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ];

    expect(diagonals_sum(diag)).toStrictEqual(6);
  });

  it('should return the sum of the diagonal inputed [[2, 2, 2], [2, 2, 2], [2, 2, 2]]', () => {
    const diag = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2]
    ];

    expect(diagonals_sum(diag)).toStrictEqual(12);
  });

  it('should return the sum of the diagonal inputed [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]', () => {
    const diag = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    expect(diagonals_sum(diag)).toStrictEqual(30);
  });

});