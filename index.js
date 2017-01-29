'use strict';

const isPrime = require('./src/primality');
const Prime = require('./src/prime');
const Table = require('./src/table');

const numberOfPrimes = process.argv[2] || 0;
const prime = new Prime(isPrime);
const table = new Table();

table.printMultiplication(prime.getPrimes(numberOfPrimes));