const morseCode = require('../morse-code');

describe('morseCode tests', () => {
    test('returns a string', () => {
      //Arrange
      const input = '';
      const expectedOutput = '';
      //Act
      const output = morseCode(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('returns the morse code translation for a simple, two letter string of morse code', () => {
        //Arrange
        const input = '.... ..';
        const expectedOutput = 'HI';
        //Act
        const output = morseCode(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('can handle more complex words', () => {
        //Arrange
        const input = '-. --- .-. - .... -.-. --- -.. . .-. ...';
        const expectedOutput = 'NORTHCODERS';
        //Act
        const output = morseCode(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('can handle sentences', () => {
        //Arrange
        const input = '--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...';
        const expectedOutput = 'GOOD MORNING NORTHCODERS';
        //Act
        const output = morseCode(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('can translate the other way if the passed boolean value is true', () => {
        //Arrange
        const expectedOutput = '--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...';
        //Act
        const output = morseCode('GOOD MORNING NORTHCODERS', true);
        //Assert
        expect(output).toBe(expectedOutput);
      });
  });