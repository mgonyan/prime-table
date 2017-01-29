'use strict';

const Primality = require('./src/primality');
const Prime = require('./src/prime');
const Table = require('./src/table');

const numberOfPrimes = process.argv[2] || 0;
const pimality = new Primality();
const prime = new Prime(pimality.isPrime);
const table = new Table();

table.printMultiplication(prime.getPrimes(numberOfPrimes));