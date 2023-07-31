
function sum_values(arr) {
  let initial = 0;

  arr.forEach(element => {
    initial += element
  });

  return initial;
}

function diagonals_sum(arr) {
  let initial = 0;

  arr.map((item) => {

    item.forEach(element => {
      initial += element
    });
  });

  return initial;
}

module.exports = { sum_values, diagonals_sum }