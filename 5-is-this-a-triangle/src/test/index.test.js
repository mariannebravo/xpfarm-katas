const { is_this_a_triangle } = require('../index');

describe('Is this a triangle', () => {

  describe('Verify if is zero', () => {
    it('should verify if any of the numbers given are different than zero', () => {
      expect(is_this_a_triangle(0, 0, 0)).toStrictEqual('Zero is not valid.');
    });

    it("return 'Zero is not valid' when the second value is zero", () => {
      expect(is_this_a_triangle(1, 0, 1)).toStrictEqual('Zero is not valid.');
    })

    it("return 'Zero is not valid' when the third value is zero", () => {
      expect(is_this_a_triangle(1, 1, 0)).toStrictEqual('Zero is not valid.');
    })

    it("return 'Zero is not valid' when the first value is zero", () => {
      expect(is_this_a_triangle(0, 1, 1)).toStrictEqual('Zero is not valid.');
    })
  });

  describe('Passed the validation: Testing the function itself', () => {

    it('should return false when the numbers (2, 2, 4) are given', () => {
      expect(is_this_a_triangle(2, 2, 4)).toBe(false);
    });

    it('should return true when the numbers (2, 2, 2) are given', () => {
      expect(is_this_a_triangle(2, 2, 2)).toBe(true)
    });
  });
});