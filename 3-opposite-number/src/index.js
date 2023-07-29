function opposite_number(num) {
  if (num < 0) {
    return Math.abs(num)
  } else {
    return -Math.abs(num)
  }
}

module.exports = { opposite_number };