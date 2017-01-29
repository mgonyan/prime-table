'use strict';

const expect = require('expect');
const Prime = require('../index');

describe('Get N prime numbers', () => {
  let prime;
  let isPrimeSpy;

  beforeEach(function () {
    isPrimeSpy = expect.createSpy();
    prime = new Prime(isPrimeSpy);
  });

  afterEach(function () {
    expect.restoreSpies();
  });

  it('can created a prime object', () => {
    expect(new Prime(isPrimeSpy)).toBeA(Prime);
  });
  it('should throw an error', () => {
    expect(() => {new Prime();}).toThrow(/You must specified a prime check function/);
  });
  it('should return a empty prime collection when "0" primes has been requested', () => {
    expect(prime.getPrimes(0)).toEqual([]);
  });
  it('should return a empty prime collection when "undefined" primes has been requested', () => {
    expect(prime.getPrimes()).toEqual([]);
  });
  it('should return a collection of 4 prime numbers', () => {
    isPrimeSpy.andCall((number) => {
      return [2, 3, 5, 7].includes(number);
    });
    expect(prime.getPrimes(4)).toEqual([2, 3, 5, 7]);
  })
});