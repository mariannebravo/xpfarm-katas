function is_this_a_triangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return 'Zero is not valid.';
  } else {
    return false
  }
}

module.exports = { is_this_a_triangle }