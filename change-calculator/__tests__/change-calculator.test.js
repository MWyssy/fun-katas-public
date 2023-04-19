const changeCalculator = require('../change-calculator.js');

describe('changeCalculator tests', () => {
    test('returns an object', () => {
      //Arrange
      const expectedOutput = {};
      //Act
      const output = changeCalculator();
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns an object with the key of "1", and the value 1, when passed the number 1', () => {
        //Arrange
        const expectedOutput = {
            "1": 1
        };
        //Act
        const output = changeCalculator(1);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('returns an object with the key of the coin, and the value 1, when passed any number that is the same value as a coin', () => {
        //Assert
        expect(changeCalculator(5)).toEqual({"5": 1});
        expect(changeCalculator(50)).toEqual({"50": 1});
        expect(changeCalculator(100)).toEqual({"100": 1});
      });
      test('returns an object with the key of the coin, and the value of how many of that coin are needed, when passed any number that is a direct multiple of the argument passed', () => {
        //Assert
        expect(changeCalculator(40)).toEqual({"20": 2});
      });
      test('returns the correct change for any number, using the lowest possible number of coins', () => {
        //Assert
        expect(changeCalculator(123)).toEqual({"100": 1, "20": 1, "2": 1, "1": 1});
        expect(changeCalculator(5432)).toEqual({"5000": 1, "200": 2, "20": 1, "10": 1, "2": 1});
      });
  });