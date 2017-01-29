'use strict';

module.exports = (number = 0) => {
  if (number <= 1) {
    return false;
  } else if (number <= 3) {
    return true;
  } else if ((number % 2) === 0 || (number % 3) === 0) {
    return false;
  }

  let index = 5;
  while (index * index <= number) {
    if ((number % index) === 0 || (number % (index + 2)) === 0) {
      return false;
    }
    index += 6;
  }

  return true;
};
