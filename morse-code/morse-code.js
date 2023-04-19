// Please do not change the name of this function
function morseCode (str, bool) {
  if (!str || str.length === 0) return '';

  const morseChars = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
  }
  
  if (!bool) {
    const result = str.replaceAll('  ', ' # ').split(' ');

    return result.map((char) => {
      if (char === '#') return ' '
      char = morseChars[char]
      return char
    }).join('');
} else {
  const result = str.split(' ');

  return result.map((word) => {
    const letters = word.split('');
    return letters.map((char) => char = Object.keys(morseChars).find(key => morseChars[key] === char)).join(' ')
  }).join('   ');
};
};

module.exports = morseCode;
