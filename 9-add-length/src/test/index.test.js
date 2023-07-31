const { add_length } = require('../index');

describe('Add Length', () => {

  it("should return 'Test 4' when the word 'Test' is inputed", () => {
    expect(add_length('Test')).toStrictEqual('Test 4');
  });

  it("should return 'Love 4' when the word 'Love' is inputed", () => {
    expect(add_length('Love')).toStrictEqual('Love 4');
  });
});