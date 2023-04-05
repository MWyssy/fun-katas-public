function dnaPairs(dna) {
  if (dna === undefined || dna.length === 0) return [[]];
  
  const result = [];
  const dnaLetters = {
    a: 'A', 
    c: 'C', 
    g: 'G', 
    t: 'T',
  }
  const dnaArray = dna.split('');

  for (let i = 0; i < dnaArray.length; i++) {
    const pairArray = [];
    const dnaStrand = dnaArray[i];
  
    switch (dnaStrand) {
      case 'A': 
        pairArray.push(dnaStrand, dnaLetters.t);
        break;
      case 'C': 
        pairArray.push(dnaStrand, dnaLetters.g);
        break;  
      case 'G': 
        pairArray.push(dnaStrand, dnaLetters.c);
        break;
      case 'T': 
        pairArray.push(dnaStrand, dnaLetters.a);
        break;  
    }
      
    result.push(pairArray);
  }

  return result;
}

module.exports = dnaPairs;
