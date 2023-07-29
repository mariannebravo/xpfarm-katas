const { convert_string } = require('../index');

describe('Convert a string to an array', () => {
  
  it('should return [\'Hello\', \'World\'] when the input \'Hello World\' is given.', () => {
    expect(convert_string('Hello World')).toStrictEqual(['Hello', 'World']);
  });
});