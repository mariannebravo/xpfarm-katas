
function sum_values(arr) {
  let initial = 0;

  arr.forEach(element => {
    initial += element
  });

  return initial;
}

module.exports = { sum_values }