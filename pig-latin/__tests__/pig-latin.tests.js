const pigLatin = require('../pig-latin');

describe('pigLatin tests', () => {
    test('returns a string', () => {
      //Arrange
      const input = '';
      const expectedOutput = '';
      //Act
      const output = pigLatin(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('adds "way" to the end of the word, if it starts with a vowel', () => {
        //Arrange
        const input = 'away';
        const expectedOutput = 'awayway';
        //Act
        const output = pigLatin(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('moves the first letter to the end of the word, and adds "ay" to it, if the word starts with a consenant', () => {
        //Arrange
        const input = 'home';
        const expectedOutput = 'omehay';
        //Act
        const output = pigLatin(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('if the word begins with more than one consenant, it will move all consecutive consenants to the end of the word, and add "ay" to it.', () => {
        //Arrange
        const input = 'charmander';
        const expectedOutput = 'armanderchay';
        //Act
        const output = pigLatin(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('works with all words in a sentance', () => {
        //Arrange
        const input = 'keep on coding';
        const expectedOutput = 'eepkay onway odingcay';
        //Act
        const output = pigLatin(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
  });