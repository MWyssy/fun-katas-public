const sentenceToCamelCase = require('../sentence-to-camel-case');

describe('sentenceToCamelCase tests', () => {
    test('returns a string', () => {
      //Arrange
      const input = '';
      const expectedOutput = '';
      //Act
      const output = sentenceToCamelCase(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('can take a one word string and capitalise it, if the bool argument is true', () => {
        //Arrange
        const expectedOutput = 'Hello';
        //Act
        const output = sentenceToCamelCase('hello', true);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('can take a one word string and make it lowercase, if the bool argument is false', () => {
        //Arrange
        const expectedOutput = 'hello';
        //Act
        const output = sentenceToCamelCase('Hello', false);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('can take a multi word string and make it UpperCase camelCase, if the bool argument is true', () => {
        //Arrange
        const expectedOutput = 'HelloWorld';
        //Act
        const output = sentenceToCamelCase('hello world', true);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('can take a multi word string and make it lowerCase camelCase, if the bool argument is false', () => {
        //Arrange
        const expectedOutput = 'helloWorld';
        //Act
        const output = sentenceToCamelCase('hello world', false);
        //Assert
        expect(output).toBe(expectedOutput);
      });
  });