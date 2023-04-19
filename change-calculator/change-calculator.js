// Please do not change the name of this function
function changeCalculator (num) {
  const result = {}
  if (!num) return result;

  let copyNum = num;

  while (copyNum > 0) {
    if (copyNum >= 5000) {
      if (result.hasOwnProperty('5000')) result['5000'] += 1;
      else result['5000'] = 1
      copyNum -= 5000;
    } else if (copyNum >= 2000) {
      if (result.hasOwnProperty('2000')) result['2000'] += 1;
      else result['2000'] = 1
      copyNum -= 2000;
    } else if (copyNum >= 1000) {
      if (result.hasOwnProperty('1000')) result['1000'] += 1;
      else result['1000'] = 1
      copyNum -= 1000;
    } else if (copyNum >= 500) {
      if (result.hasOwnProperty('500')) result['500'] += 1;
      else result['500'] = 1
      copyNum -= 500;
    } else if (copyNum >= 200) {
      if (result.hasOwnProperty('200')) result['200'] += 1;
      else result['200'] = 1
      copyNum -= 200;
    } else if (copyNum >= 100) {
      if (result.hasOwnProperty('100')) result['100'] += 1;
      else result['100'] = 1
      copyNum -= 100;
    } else if (copyNum >= 50) {
      if (result.hasOwnProperty('50')) result['50'] += 1;
      else result['50'] = 1
      copyNum -= 50;
    } else if (copyNum >= 20) {
      if (result.hasOwnProperty('20')) result['20'] += 1;
      else result['20'] = 1
      copyNum -= 20;
    } else if (copyNum >= 10) {
      if (result.hasOwnProperty('10')) result['10'] += 1;
      else result['10'] = 1
      copyNum -= 10;
    } else if (copyNum >= 5) {
      if (result.hasOwnProperty('5')) result['5'] += 1;
      else result['5'] = 1
      copyNum -= 5;
    } else if (copyNum >= 2) {
      if (result.hasOwnProperty('2')) result['2'] += 1;
      else result['2'] = 1;
      copyNum -= 2;
    } else {
      if (result.hasOwnProperty('1')) result['1'] += 1;
      else result['1'] = 1;
      copyNum -= 1;
    }

  }

  return result;
};

module.exports = changeCalculator;
