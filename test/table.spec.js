'use strict';

const expect = require('expect');
const Table = require('../index');
const stdout = require("test-console").stdout;

function testPrimeTable(primes, result) {
  const table = new Table();
  let inspect = stdout.inspect();
  table.printMultiplication(primes);
  inspect.restore();
  expect(inspect.output.join('')).toEqual(result);
}

describe('Print prime table', () => {
  it('can created a table object', () => {
    expect(new Table()).toBeA(Table);
  });
  it('can print a primes multiplication table', () => {
    testPrimeTable([], '[N = 0]\n| X |\n');
  });
  it('can print a primes multiplication table with N = 1', () => {
    testPrimeTable([2],
      `[N = 1]
| X | 2|
| 2 | 4|`);
  });
  it('can print a primes multiplication table with N = 2', () => {
    testPrimeTable([2, 3],
      `[N = 2]
| X | 2| 3|
| 2 | 4| 6|
| 3 | 6| 9|`);
  });
  it('can print a primes multiplication table with N = 3', () => {
    testPrimeTable([2, 3, 5],
      `[N = 3]
| X | 2| 3| 5|
| 2 | 4| 6| 10|
| 3 | 6| 9| 15|
| 5 | 10| 15| 25|`);
  });
});