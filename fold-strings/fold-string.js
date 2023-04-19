// Please do not change the name of this function
function foldString (str) {
  const wordArray = str.split(' ')
  let middleIndex = 0
  let firstHalf = [];
  let secondHalf = [];
  const result = [];

  function invertLetters(array) {
    for (let i = array.length -1; i >= 0; i--) {
       result.push(array[i]);
    };
  };
  
  wordArray.map((word) => {
    let letterArray = word.split('');
    if (letterArray.length % 2 === 0) {
      middleIndex = (letterArray.length / 2);
      firstHalf = letterArray.slice(0, middleIndex);
      secondHalf = letterArray.slice(middleIndex, letterArray.length);
      
      result.push(' ');
      invertLetters(firstHalf);
      invertLetters(secondHalf);

    } else {
      middleIndex = Math.floor(letterArray.length / 2);
      let middleLetter = letterArray[middleIndex]
      firstHalf = letterArray.slice(0, middleIndex);
      secondHalf = letterArray.slice(middleIndex + 1, letterArray.length);
      
      result.push(' ');
      invertLetters(firstHalf);
      result.push(middleLetter);
      invertLetters(secondHalf);

    };
  });

  return result.join('').trim();
};

module.exports = foldString
