const { stringLength, reverseString, calculator } = require('./exercise');

const getRandomInt = (max) => Math.floor(Math.random() * max);
const RandA = getRandomInt(100);
const RandB = getRandomInt(100);

describe('Test 1: stringLength(string)', () => {
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

describe('Test 2: reverseString(string)', () => {
  test('"RADAR" most not change reverseString(\'RADAR\') be Equal to \'RADAR\'', () => {
    expect(reverseString('RADAR')).toEqual('RADAR');
  });

  test('"Radar" most  be Equal to "radaR"', () => {
    expect(reverseString('Radar')).toEqual('radaR');
  });
});

describe(`Test 3: calculator Class With A=${RandA} B=${RandB}`, () => {

  describe('Test 3.1: ADD', () => {
    test('"hard coded: 1 + 1 = 2"', () => {
      expect(calculator.add(1, 1)).toEqual(2);
    });

    test(`random number A + B: ${RandA} + ${RandB} = ${RandA + RandB}`, () => {
      expect(calculator.add(RandA, RandB)).toEqual(RandA + RandB);
    });

    test('1 + (- 1) => No negative B value', () => {
      expect(() => calculator.add(1, -1)).toThrow('b is negative (-1)');
    });
  });

  describe('Test 3.2: SUBTRACT', () => {
    test('"hard coded: 1 - 1 = 0"', () => {
      expect(calculator.subtract(1, 1)).toEqual(0);
    });

    test(`random number A - B: ${RandA} - ${RandB} = ${RandA - RandB}`, () => {
      expect(calculator.subtract(RandA, RandB)).toEqual(RandA - RandB);
    });

    test('1 - (- 1) => No negative B value', () => {
      expect(() => calculator.subtract(1, -1)).toThrow('b is negative (-1)');
    });
  });

  describe('Test 3.3: DIVIDE', () => {
    test('"hard coded: 1 / 1 = 1"', () => {
      expect(calculator.divide(1, 1)).toEqual(1);
    });
    test(`random number A / (B + 1): ${RandA} / ${RandB + 1} = ${RandA / (RandB + 1)}`, () => {
      expect(calculator.divide(RandA, (RandB + 1))).toEqual(RandA / (RandB + 1));
    });

    test('1 / (- 1) => No negative B value', () => {
      expect(() => calculator.divide(1, -1)).toThrow('b is negative (-1)');
    });

    test(`${RandA} / 0 =>  No Zero B value`, () => {
      expect(() => calculator.divide(RandA, 0)).toThrow('b is Zero');
    });
  });

  describe('Test 3.2: MULTIPLY', () => {
    test('"hard coded: 1 - 1 = 0"', () => {
      expect(calculator.multiply(1, 1)).toEqual(1);
    });

    test(`random number A x B: ${RandA} x ${RandB} = ${RandA * RandB}`, () => {
      expect(calculator.multiply(RandA, RandB)).toEqual(RandA * RandB);
    });

    test('1 * (- 1) => No negative B value', () => {
      expect(() => calculator.multiply(1, -1)).toThrow('b is negative (-1)');
    });
  });
});
