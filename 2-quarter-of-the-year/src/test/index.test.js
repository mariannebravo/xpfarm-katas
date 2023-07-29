const { verify_month } = require('../index');

describe('Verify Month', () => {
  
  it('should verify if the number given is a valid month', () => {
    expect(verify_month(0)).toBe(false);
  });
});