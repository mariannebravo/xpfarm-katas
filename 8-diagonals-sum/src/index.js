
function diagonals_sum(matrix) {
  const mtx0 = matrix[0];
  const mtx1 = matrix[1];
  const mtx2 = matrix[2];

  const result1 = mtx0[0] + mtx0[2];
  const result2 = mtx1[1] + mtx1[1];
  const result3 = mtx2[2] + mtx2[0];

  const teste = Number(result1 + result2 + result3);

  return teste;
}

module.exports = { diagonals_sum }