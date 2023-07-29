const { verify_month } = require('../index');

describe('Verify Month', () => {
  
  it('should return false when the month 0 is given', () => {
    expect(verify_month(0)).toBe(false);
  });

  it('should return true when the month 2 is given', () => {
    expect(verify_month(2)).toBe(true);
  });
});