const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs tests', () => {
    test('returns a nested array', () => {
      //Arrange
      const dnaString = '';
      const expectedOutput = [[]];
      //Act
      const output = dnaPairs(dnaString);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns a nested array containing a single pair for a single dna strand', () => {
      //Arrange
      const dnaString = 'G';
      const expectedOutput = [['G', 'C']];
      //Act
      const output = dnaPairs(dnaString);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns a nested array containing the pairs for all dna strands in the provided string', () => {
      //Arrange
      const dnaString = 'ATAG';
      const expectedOutput = [["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"]];
      //Act
      const output = dnaPairs(dnaString);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
  });