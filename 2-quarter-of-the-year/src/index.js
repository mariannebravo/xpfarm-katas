function verify_month(num) {
  return (num >= 1 && num <= 12) ? true : false;
}

function quarter_of_the_year(num) {
  return "1st Quarter";
}

module.exports = { verify_month, quarter_of_the_year }