function two_nums_positive(arr) {
  if (arr[0] < 0 && arr[1] < 0 && arr[2] > 0) {
    return false;
  } else if (arr[0] < 0 && arr[1] > 0 && arr[2] > 0) {
    return true;
  } else if (arr[0] > 0 && arr[1] > 0 && arr[2] > 0) {
    return false;
  } else {
    return false;
  }
}

module.exports = { two_nums_positive }