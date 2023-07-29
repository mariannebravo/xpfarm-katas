const { convert_string } = require('../index');

describe('Convert a string to an array', () => {
  
  it('should return [\'Hello\', \'World\'] when the input \'Hello World\' is given.', () => {
    expect(convert_string('Hello World')).toStrictEqual(['Hello', 'World']);
  });

  it('should return [\'I\', \'love\', \'you\'] when the input \'I love you\' is given.', () => {
    expect(convert_string('I love you')).toStrictEqual(['I', 'love', 'you']);
  });
});