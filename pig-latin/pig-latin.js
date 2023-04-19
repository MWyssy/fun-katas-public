// Please do not change the name of this function
function pigLatin(str) {
  if (!str || str.length === 0) return '';

  const words = str.split(' ');

  return words.map((word) => {
      if (/[aeiou]/i.test(word[0])) {
        return `${word}way`
      };
    
      const firstLetters = word.match(/^[^aeiou]+/)[0];
      const result = word.slice(firstLetters.length);
    
      return `${result}${firstLetters}ay`
    })
    .join(' ');
};

module.exports = pigLatin
