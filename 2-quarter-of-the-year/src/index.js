function verify_month(num) {
  return (num >= 1 && num <= 12) ? true : false;
}

module.exports = { verify_month }