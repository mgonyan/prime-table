'use strict';

/**
 * Performs a check to determine if a number is prime
 *
 * @param {Number} number
 * @return {boolean}
 */
module.exports = (number = 0) => {
  if (number <= 1) {
    return false;
  } else if (number <= 3) {
    return true;
  } else if (divisibleBy(number, 2) || divisibleBy(number, 3)) {
    return false;
  }

  let index = 5;
  while (index * index <= number) {
    if (divisibleBy(number, index) || divisibleBy(number, index + 2)) {
      return false;
    }

    index += 6;
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