function area_or_perimeter(num1, num2) {
  if (num1 * num2 % 2 === 0) {
    return 'area'
  } else {
    return 'perimeter'
  }
}

module.exports = { area_or_perimeter }