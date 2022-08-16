const { stringLength } = require('./exercise');

describe('stringLength()', () => {
  it('"UnitTests" to be 9 ', () => {
    expect(stringLength('UnitTests')).toBe(9);
  });
});
