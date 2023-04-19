const foldString = require('../fold-string');

describe('foldString tests', () => {
    test('returns a string', () => {
      //Arrange
      const input = '';
      const expectedOutput = '';
      //Act
      const output = foldString(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('when passed a 4 letter string, it swaps the first and last letters with the two middle letters', () => {
        //Arrange
        const input = 'code';
        const expectedOutput = 'oced';
        //Act
        const output = foldString(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('when passed a 5 letter string, it swaps the first and last letters with the two middle letters either side of the middle letter', () => {
        //Arrange
        const input = 'codes';
        const expectedOutput = 'ocdse';
        //Act
        const output = foldString(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('will work with longer words', () => {
        //Assert
        expect(foldString('javascript')).toBe('savajtpirc');
        expect(foldString('Northcoders')).toBe('htroNcsredo');
      });
      test('will work with sentences, folding each word individually', () => {
        //Assert
        expect(foldString('javascript is cool')).toBe('savajtpirc is oclo');
      });
  });