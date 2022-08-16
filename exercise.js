const throwf = (m) => { throw m; };
const throwfIsNegative = (n) => throwf(Error(`b is negative (${n})`));
const throwfIsZero = () => throwf(Error('b is Zero'));

module.exports = {
  stringLength: (string) => {
    if (string.length < 1) throw Error('string most have at lest 1 character');
    if (string.length > 10) throw Error('string most be not longer than 10 characters');
    return string.length;
  },
  reverseString: (string) => string.split('').reverse().join(''),
  calculator: {
    add: (a, b) => a + (b < 0 ? throwfIsNegative(b) : b),
    subtract: (a, b) => a - (b < 0 ? throwfIsNegative(b) : b),
    divide: (a, b) => {
      if (b < 0) throwfIsNegative(b);
      if (b === 0) throwfIsZero();
      return a / b;
    },
    multiply: (a, b) => a * (b < 0 ? throwfIsNegative(b) : b),
  },
};