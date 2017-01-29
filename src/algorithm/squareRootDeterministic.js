'use strict';

module.exports = (number = 0) => {
  if (number <= 1) {
    return false;
  } else if (number <= 3) {
    return true;
  } else if (divisibleBy(number, 2) || divisibleBy(number, 3)) {
    return false;
  }

  let square = Math.sqrt(number);
  for (let i = 2; i <= square; i++) {
    if (divisibleBy(number,  i)) {
      return false;
    }
  }

  return true;
};


/**
 * Check if number/divisor = 0
 *
 * @param {number} number
 * @param {number} divisor
 * @return {boolean}
 */
function divisibleBy(number, divisor) {
  return (number % divisor === 0);
}