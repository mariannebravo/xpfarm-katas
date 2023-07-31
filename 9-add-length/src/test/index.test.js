const { add_length } = require('../index');

describe('Add Length', () => {

  it("should return 'Test 4' when the word 'Test' is inputed", () => {
    expect(add_length('Test')).toStrictEqual('Test 4');
  });
});