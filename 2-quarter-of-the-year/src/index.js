function verify_month(num) {
  return (num >= 1 && num <= 12) ? true : false;
}

function quarter_of_the_year(num) {
  const isValid = verify_month(num);

  if (isValid) {
    if ((num >= 1 && num <= 3)) {
      return '1st Quarter'
    } else if ((num >= 4 && num <= 6)) {
      return '2nd Quarter'
    } else if ((num >= 7 && num <= 9)) {
      return '3rd Quarter'
    } else {
      return '4th Quarter'
    }
  }
}

module.exports = { verify_month, quarter_of_the_year }