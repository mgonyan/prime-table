'use strict';

const expect = require('expect');
const isPrime = require('../../src/algorithm/simpleDeterministic');
const generator = require('prime-generator');

describe('Primality for simpleDeterministic algorithm', () => {
  it('should say a negative number cannot be a prime by definition', () => {
    expect(isPrime(-1)).toBeFalsy();
  });
  it('should say undefined is not a prime number', () => {
    expect(isPrime()).toBeFalsy();
  });
  it('should say 0 is not a prime number', () =>{
    expect(isPrime(0)).toBeFalsy();
  });
  it('should say 3 is a prime number', () =>{
    expect(isPrime(3)).toBeTruthy();
  });
  it('should say a generated prime using a external library is prime', () => {
    expect(isPrime(generator().next().value)).toBeTruthy();
  });
});