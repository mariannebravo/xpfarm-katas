function is_this_a_triangle(a, b, c) {
  if (b === 0 || c === 0) {
    return 'Zero is not valid.';
  }
}

module.exports = { is_this_a_triangle }