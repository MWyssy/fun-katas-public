// Please do not change the name of this function
function sentenceToCamelCase (sentence, bool) {
  let result = '';
  if (!sentence || sentence.length === 0) return result;
  let firstLetter = sentence[0];
  const words = sentence.split(' ')

  if (bool) {
    let capitalisedWords = words.map((word) => {
      let firstLetter = word[0].toUpperCase()
      capWord = word
        .toLowerCase()
        .slice(1)
      return `${firstLetter}${capWord}`
    });
    
    return capitalisedWords.join('');
  };

  let capitalisedWords = words.map((word) => {
    if (word !== words[0]) {
      let firstLetter = word[0].toUpperCase()
      capWord = word
        .toLowerCase()
        .slice(1)
      return `${firstLetter}${capWord}`
    } else {
      return word.toLowerCase();
    };
  });

  return capitalisedWords.join('');

};

module.exports = sentenceToCamelCase;
