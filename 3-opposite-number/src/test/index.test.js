const { opposite_number } = required('../index');

describe('Opposite Number', () => {
  
  it('should convert the number 1 to -1', () => {
    expect(opposite_number(1)).toBe(-1);
  });
});