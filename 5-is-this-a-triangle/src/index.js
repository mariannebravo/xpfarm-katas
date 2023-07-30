function is_this_a_triangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return 'Zero is not valid.';
  } else if (a !== b || a !== c || b !== c) {
    return false
  } else {
    return true
  }
}

module.exports = { is_this_a_triangle }