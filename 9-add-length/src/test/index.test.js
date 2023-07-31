const { add_length } = require('../index');

describe('Add Length', () => {

  it("should return 'Test 4' when the word 'Test' is inputed", () => {
    expect(add_length('Test')).toStrictEqual('Test 4');
  });

  it("should return 'Love 4' when the word 'Love' is inputed", () => {
    expect(add_length('Love')).toStrictEqual('Love 4');
  });

  it("shouldreturn 'Hello 5' when the word 'Hello' is inputed", () => {
    expect(add_length('Hello')).toStrictEqual('Hello 5');
  });

  it("should return ['Hello 5', 'guys 4'] when the word 'Hello guys' is inputed", () => {
    expect(add_length('Hello guys')).toStrictEqual(['Hello 5', 'guys 4']);
  });
});