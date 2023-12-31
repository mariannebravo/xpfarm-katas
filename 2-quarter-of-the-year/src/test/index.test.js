const { verify_month, quarter_of_the_year } = require('../index');

describe('Verify Month', () => {
  
  it('should return false when the month 0 is given', () => {
    expect(verify_month(0)).toBe(false);
  });

  it('should return true when the month 2 is given', () => {
    expect(verify_month(2)).toBe(true);
  });

  it('should return true when the month 6 is given', () => {
    expect(verify_month(6)).toBe(true);
  });

  it('should return false when the month 13 is given', () => {
    expect(verify_month(13)).toBe(false);
  });
});

describe('Quarter of the year', () => {
  it('should return "1st Quarter" when the month 1 is given', () => {
    expect(quarter_of_the_year(1)).toStrictEqual("1st Quarter");
  });

  it('should return "2nd Quarter" when the month 4 is given', () => {
    expect(quarter_of_the_year(4)).toStrictEqual("2nd Quarter");
  });

  it('should "3rd Quarter" when the month 8 is given', () => {
    expect(quarter_of_the_year(8)).toStrictEqual("3rd Quarter");
  });

  it('should "4th Quarter" when the month 11 is given', () => {
    expect(quarter_of_the_year(11)).toStrictEqual("4th Quarter");
  });
});