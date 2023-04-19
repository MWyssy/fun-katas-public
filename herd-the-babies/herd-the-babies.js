// Please do not change the name of this function
function herdTheBabies (str) {
  if (!str || str.length === 0) return '';

  const result = [];
  let adults = '';
  let babies = '';

  if (/[a-z]/g.test(str)) {
    babies = str.match(/[a-z]/g).sort();
  }
  if (/[A-Z]/g.test(str)) {
    adults = str.match(/[A-Z]/g).sort();
  };

  if (adults.length === 0) return babies.join('');
  if (babies.length === 0) return adults.join('');

  adults.forEach((adult) => {
    result.push(adult);
    babies.forEach((baby) => {
      if (baby === adult.toLowerCase()) {
        result.push(baby);
      };
    });
  });
  

  console.log(result)

  return result.join('');
};

module.exports = herdTheBabies;
