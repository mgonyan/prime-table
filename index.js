'use strict';

module.exports = Prime;

/**
 * Gets the number of prime starting from 2, 3,..., N_(numberOfPrimes),
 * In order to check if a certain number is prime, needs to receive a
 * isPrime function which performs the primality test. That flexibility
 * could allow as to try different algorithms a check its times.
 *
 * @param isPrime
 * @constructor
 */
function Prime(isPrime) {
  if (typeof isPrime !== 'function') {
    throw new Error('You must specified a prime check function');
  }

  this.isPrime = isPrime;
}

/**
 * Return a collection of consecutive prime numbers
 *
 * @param {Number} number, number of prime number we want to get.
 * @return {Array} primes collection of prime numbers
 */
Prime.prototype.getPrimes = function getPrimes(number = 0) {
  let primes = [];

  let possiblePrime = 2;
  while(primes.length != number) {
    if (this.isPrime(possiblePrime)) {
      primes.push(possiblePrime);
    }

    ++possiblePrime;
  }

  return primes;
};