const getTweetData = require('../get-tweet-data');

describe('getTweetData tests', () => {
    test('returns an empty object when passed no argument', () => {
      //Arrange
      const expectedOutput = {};
      //Act
      const output = getTweetData();
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns an object containing empty tweet data when passed an empty string', () => {
        //Arrange
        const tweet = '';
        const expectedOutput = {tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0};
        //Act
        const output = getTweetData(tweet);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('counts the length of the tweet when there are no tags or mentions included in the tweet.', () => {
        //Arrange
        const tweet = 'Hi, this is my first tweet!';
        const expectedOutput = {tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 27};
        //Act
        const output = getTweetData(tweet);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('when the tweet includes one tag, it is shown in the tags array, and counted once in the tagCount', () => {
        //Arrange
        const tweet = 'Hi, this is my first tweet! #tweeting';
        const expectedOutput = {tags: ['#tweeting'], mentions: [], tagCount: 1, mentionCount: 0, length: 37};
        //Act
        const output = getTweetData(tweet);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('when the tweet includes multiple tags, it shows them in the tags array, and counts once per tag in the tagCount', () => {
        //Arrange
        const tweet = 'Hi, this is my first tweet! #tweeting #coding';
        const expectedOutput = {tags: ['#tweeting', '#coding'], mentions: [], tagCount: 2, mentionCount: 0, length: 45};
        //Act
        const output = getTweetData(tweet);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('when the tweet includes one mention, it is shown in the mentions array, and counts once in the mentionCount', () => {
        //Arrange
        const tweet = 'Hi, this is my first tweet! @twitter';
        const expectedOutput = {tags: [], mentions: ['@twitter'], tagCount: 0, mentionCount: 1, length: 36};
        //Act
        const output = getTweetData(tweet);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('when the tweet includes multiple mentions, it shows them in the mentions array, and counts once per mention in the mentionCount', () => {
        //Arrange
        const tweet = 'Hi, this is my first tweet! @twitter @northCoders';
        const expectedOutput = {tags: [], mentions: ['@twitter', '@northCoders'], tagCount: 0, mentionCount: 2, length: 49};
        //Act
        const output = getTweetData(tweet);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('adds both mentions and tags, and updates their respective counts', () => {
        //Arrange
        const tweet = 'Hi, this is my first tweet! @twitter @northCoders #tweeting #coding';
        const expectedOutput = {tags: ['#tweeting', '#coding'], mentions: ['@twitter', '@northCoders'], tagCount: 2, mentionCount: 2, length: 67};
        //Act
        const output = getTweetData(tweet);
        //Assert
        expect(output).toEqual(expectedOutput);
        expect(getTweetData('I am #coding with @northcoders I love #coding and @northcoders')).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 });
      });
  });