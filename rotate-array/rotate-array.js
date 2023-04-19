// Please do not change the name of this function
function rotateArray (arr, num) {
  const result = [...arr];

  if (num >= 0) {
    for (let i = 0; i < num; i++) {
    const poppedValue = result.pop();
    result.unshift(poppedValue);
    };
  } else {
    for (let i = 0; i > num; i--) {
      const shiftedValue = result.shift();
      result.push(shiftedValue)
    };
  };

  return result;
};

module.exports =  rotateArray;
