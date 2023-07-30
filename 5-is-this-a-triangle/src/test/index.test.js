const { is_this_a_triangle } = require('../index');

describe('Is this a triangle', () => {

  it('should verify if any of the numbers given are different than zero', () => {
    expect(is_this_a_triangle(0, 0, 0)).toStrictEqual('Zero is not valid.');
  });
});