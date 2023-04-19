const herdTheBabies = require('../herd-the-babies');

describe('herdTheBabies tests', () => {
    test('returns a string', () => {
      //Arrange
      const input = '';
      const expectedOutput = '';
      //Act
      const output = herdTheBabies(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('will sort the string alphabetically', () => {
        //Arrange
        const input = 'badc';
        const expectedOutput = 'abcd';
        //Act
        const output = herdTheBabies(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('sorts the string alphabetically, with capital letters preceeding lower case letters', () => {
        //Arrange
        const input = 'aBA';
        const expectedOutput = 'AaB';
        //Act
        const output = herdTheBabies(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('works with more complex strings', () => {
        //Arrange
        const input = 'bcskNbAOBCaaFsjWiodfknSowijKJsID';
        const expectedOutput = 'AaaBbbCcDdFfIiiJjjKkkNnOooSsssWw';
        //Act
        const output = herdTheBabies(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
  });