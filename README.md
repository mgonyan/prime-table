# Prime table

Takes numeric input (N) from a user and outputs a multiplication table of (N) prime numbers.

```sh
[N = 5]
|  X |  2 |  3 |  5 |  7 |  11 | -> Prime numbers
|  2 |  4 |  6 | 10 | 14 |  22 |
|  3 |  6 |  9 | 15 | 21 |  33 |
|  5 | 10 | 15 | 25 | 35 |  55 | -> A[row] * A[column] = cell
|  7 | 14 | 21 | 35 | 49 |  77 |
| 11 | 22 | 33 | 55 | 77 | 121 |
   ^
   |
 Prime numbers
```

## Requirements

- node
- npm
- mocha
- prime-generator (Only for testing)
- test-console


## Run test

```sh
$> npm test
```

## Run script

N = the number of primes (N > 0)

```sh
$> node index.js [N]
```

## Future improvement

- Add library to print table
- Add more efficient algorithm to perform the primality check
- Add performance stats between algorithm

## Author

- Manue Gonzalez | [GitHub](https://github.com/mgonyan) | [Twitter](https://twitter.com/mgonyan) | <mgonyan@gmail.com>
