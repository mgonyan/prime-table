'use strict';

module.exports = Table;

function Table() {};

/**
 * Prints Multiplication grid wih (values.length + 1) * (values.length + 1) elements
 * e.g. : N = 5
 *
 * [N = 5]
 * |  X |  2 |  3 |  5 |  7 |  11 | -> Prime numbers
 * |  2 |  4 |  6 | 10 | 14 |  22 |
 * |  3 |  6 |  9 | 15 | 21 |  33 |
 * |  5 | 10 | 15 | 25 | 35 |  55 | -> A[row] * A[column] = cell
 * |  7 | 14 | 21 | 35 | 49 |  77 |
 * | 11 | 22 | 33 | 55 | 77 | 121 |
 *    ^
 *    |
 *  Prime numbers
 *
 * @param {Array} values collection to be printed;
 */
Table.prototype.printMultiplication = function printMultiplication(values) {

  console.log('[N = ' + values.length + ']');

  process.stdout.write('| X |');
  for (let row=0; row < values.length; row++) {
    process.stdout.write(' ' + values[row] + '|');
  }

  printEOL();

  for (let row=0; row < values.length; row++) {
    process.stdout.write('| ' + values[row] + ' |');
    for (let column = 0; column < values.length; column++) {
      process.stdout.write(' ' + (values[row] * values[column]) + '|');
    }
    if ((row + 1) !== values.length) {
      printEOL();
    }
  }
};

/**
 * Helper function to print a End of line
 */
function printEOL() {
  console.log('');
}