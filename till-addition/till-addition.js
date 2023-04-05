
function tillAddition (cash) {
  if (cash === undefined) return '';
  let result = 0.00;
  
  for (money in cash) {
    let denom = 0.00;
    if (money[0] == "£") {
      denom = (Number(money.match(/[^£]+/)) * (cash[money]));
    } else {
      denom = ((Number(money.match(/[^p]+/)) / 100) * cash[money]);
    }
    result += denom;
  };

  return `£${result.toFixed(2)}`;
};

module.exports = tillAddition;
 