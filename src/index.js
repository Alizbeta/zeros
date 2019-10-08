module.exports = function zeros(expression) {
  let multipliers = expression.split('*');
  let numOf2 = 0, numOf5 = 0;
  multipliers.forEach(number => {
    let j, numOfZeros;
    if (number.slice(-2) === '!!') {
      j = 2;
      numOfZeros = parseInt(number.slice(0, -2));
    }
    else {
      j = 1;
      numOfZeros = parseInt(number.slice(0, -1));
    }
    while (numOfZeros > 0) {
      let tmp = numOfZeros;
      while (tmp % 5 == 0) {
        tmp /= 5;
        numOf5++;
      }
      tmp = numOfZeros;
      while (tmp % 2 == 0) {
        tmp /= 2;
        numOf2++;
      }
      numOfZeros -= j;
    }
  });
  return Math.min(numOf5, numOf2);
}
