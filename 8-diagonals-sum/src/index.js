
function sum_values(arr) {
  let initial = 0;

  arr.forEach(element => {
    initial += element
  });

  return initial;
}

function diagonals_sum(arr) {
  // arr1[0] + arr2[1] + arr3[2]
  arr.map((item) => {
    return item[0][0] + item[1][1] + item[2][2]
  });

}

module.exports = { sum_values, diagonals_sum }