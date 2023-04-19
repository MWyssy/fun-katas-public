const rotateArray = require('../rotate-array');

describe('rotateArray tests', () => {
    test('returns an array', () => {
      //Arrange
      const input = [];
      const expectedOutput = [];
      //Act
      const output = rotateArray(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns a new array', () => {
        //Arrange
        const input = [];
        //Act
        const output = rotateArray(input);
        //Assert
        expect(output).not.toBe(input);
      });
    test('returns a copy of the array if the second argument is 0', () => {
        //Arrange
        const input = [1, 2, 3];
        const expectedOutput = [1, 2, 3];
        //Act
        const output = rotateArray(input);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('if the second argument is 1, it returns a copy of the array with the last index moved to the front, and the others moved up by 1', () => {
        //Arrange
        const expectedOutput = [3, 1, 2];
        //Act
        const output = rotateArray([1, 2, 3], 1);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('if the second argument is -1, it returns a copy of the array with the first index moved to the back, and the others moved down by 1', () => {
        //Arrange
        const expectedOutput = [2, 3, 1];
        //Act
        const output = rotateArray([1, 2, 3], -1);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('rotates the array any number of times based on the value of the second argument', () => {
        //Assert
        expect(rotateArray([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2]);
        expect(rotateArray([1, 2, 3, 4, 5], -3)).toEqual([4, 5, 1, 2, 3]);
        expect(rotateArray([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);
      });
  });