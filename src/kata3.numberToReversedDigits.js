const numberToReversedDigits = number => {
  const numberToCharArray = [...`${number}`];
  return numberToCharArray
    .map(numberAsChar => parseInt(numberAsChar, 10))
    .reverse();
};

module.exports = numberToReversedDigits;
