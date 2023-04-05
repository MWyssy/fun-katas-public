const calculateDivisors = require('../calculate-divisors');

describe('calculateDivisors tests', () => {
    test('returns 0 when passed no argument', () => {
      //Arrange
      const number = 0;
      const expectedOutput = 0;
      //Act
      const output = calculateDivisors(number);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('returns 0 when passed an argument where there are no number divisable by 3 or 5 below it', () => {
        //Arrange
        const number = 2;
        const expectedOutput = 0;
        //Act
        const output = calculateDivisors(number);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('returns a 3 if passed a number 5 or less', () => {
        //Arrange
        const number = 5;
        const expectedOutput = 3;
        //Act
        const output = calculateDivisors(number);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('returns the sum of all numbers, divisable by 3 or 5, below the passed number', () => {
        //Arrange
        const number = 12;
        const expectedOutput = 33;
        //Act
        const output = calculateDivisors(number);
        //Assert
        expect(output).toBe(expectedOutput);
      });
  });