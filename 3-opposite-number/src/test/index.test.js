const { opposite_number } = require('../index');

describe('Opposite Number', () => {
  
  it('should convert the number 1 to -1', () => {
    expect(opposite_number(1)).toBe(-1);
  });

  it('should convert the number -1 to 1', () => {
    expect(opposite_number(-1)).toBe(1);
  });

  it('should convert the number 5 to -5', () => {
    expect(opposite_number(5)).toBe(-5);
  });
});