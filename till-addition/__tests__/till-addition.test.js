const tillAddition = require('../till-addition');

describe('tillAddition tests', () => {
    test('returns a string', () => {
      //Arrange
      const expectedOutput = "";
      //Act
      const output = tillAddition();
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('if passed an empty array, it will return £0', () => {
        //Arrange
        const cash = {};
        const expectedOutput = "£0.00";
        //Act
        const output = tillAddition(cash);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('returns the sum of all of the coins/notes in the till if all have a single unit', () => {
        //Arrange
        const cash = {
             "5p": 1,
             "10p": 1,
             "20p": 1,
             "50p": 1,
             "£1": 1,
             "£5": 1,
             "£20": 1,
             "£50": 1,
            };
        const expectedOutput = "£76.85";
        //Act
        const output = tillAddition(cash);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('returns the sum of all of the coins/notes in the till taking into account how many of each coins/notes there are', () => {
        //Arrange
        const cash = {
             "5p": 10,
             "10p": 6,
             "20p": 8,
             "50p": 4,
             "£1": 14,
             "£5": 23,
             "£20": 8,
             "£50": 1,
            };
        const expectedOutput = "£343.70";
        //Act
        const output = tillAddition(cash);
        //Assert
        expect(output).toBe(expectedOutput);
      });
  });