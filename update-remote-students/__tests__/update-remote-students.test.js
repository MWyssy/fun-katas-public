const updateRemoteStudents = require('../update-remote-students');

describe('updateRemoteStudents tests', () => {
    test('returns an array', () => {
      //Arrange
      const students = [];
      const expectedOutput = [];
      //Act
      const output = updateRemoteStudents(students);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns a new array', () => {
        //Arrange
        const students = [];
        const expectedOutput = [];
        //Act
        const output = updateRemoteStudents(students);
        //Assert
        expect(students).not.toBe(expectedOutput);
      });
      test('returns a copy of each student object if all the students already have a location', () => {
        //Arrange
        const students = [
            { name: 'Hypatia', age: 31, location: 'leeds' }, 
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        const expectedOutput = [
            { name: 'Hypatia', age: 31, location: 'leeds' }, 
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        //Act
        const output = updateRemoteStudents(students);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('returns the student with the update location key-value, when passed one student', () => {
        //Arrange
        const students = [{ name: 'Euler', age: 27 }];
        const expectedOutput = [{ name: 'Euler', age: 27, location: 'remote' }];
        //Act
        const output = updateRemoteStudents(students);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('updates all students without a location to include a location of remote', () => {
        //Arrange
        const students = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        const expectedOutput = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        //Act
        const output = updateRemoteStudents(students);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('doesn\'t mutate the original array', () => {
        //Arrange
        const students = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        const studentsCopy = [...students].map((student) => {
            const copyStudent = {...student};
            return copyStudent;
        });
        //Act
        updateRemoteStudents(students);
        //Assert
        expect(students).toEqual(studentsCopy);
      });
  });