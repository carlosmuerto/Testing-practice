const { stringLength } = require('./exercise');

describe('stringLength()', () => {
  test('"UnitTests" to be 9 ', () => {
    expect(stringLength('UnitTests')).toBe(9);
  });
  test('"" throw "string most have at lest 1 character"', () => {
    expect(() => { stringLength(''); })
      .toThrow('string most have at lest 1 character');
  });
  test('"To long string" Throw "string most be not longer than 10 characters"', () => {
    expect(() => { stringLength('To long string'); })
      .toThrow('string most be not longer than 10 characters');
  });
});
