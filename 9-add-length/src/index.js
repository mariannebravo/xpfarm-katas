function add_length(str) {
  const temp = [];
  const splitted = str.split(' ');

  splitted.map((el) => {
    temp.push(`${el} ${el.length}`)
  })

  return temp;
}

module.exports = { add_length }