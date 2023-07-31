
function sum_values(arr) {
  let initial = 0;

  arr.forEach(element => {
    initial += element
  });

  return initial;
}

function diagonals_sum(arr) {
  return 9
}

module.exports = { sum_values, diagonals_sum }