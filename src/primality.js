'use strict';

const algorithms = require('./algorithm/primalityAlgorithms');

module.exports = Primality;

/**
 * Primality check prime test
 *
 * @param {String} algorithm
 * @constructor
 */
function Primality(algorithm = algorithms.SIMPLE_METHOD) {
  if (algorithm === algorithms.SQUARE_ROOT_METHOD) {
    this.isPrime = require('./algorithm/squareRootDeterministic');
  } else {
    this.isPrime = require('./algorithm/simpleDeterministic');
  }
};

/**
 * Simple implementation base on https://en.wikipedia.org/wiki/Primality_test
 * [Deterministic]
 *
 * @return {function(*=)}
 */
Primality.prototype.isPrime = (number) => {
  return this.isPrime(number);
};