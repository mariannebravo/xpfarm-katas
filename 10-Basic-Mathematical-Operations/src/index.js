function math_operations(operator, num1, num2) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2
  } else if (operator === '*') {
    return num1 * num2
  } else {
    return num1 / num2
  }
}

module.exports = { math_operations }