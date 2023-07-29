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
    }
  }
}

module.exports = { verify_month, quarter_of_the_year }