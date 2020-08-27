function getFactorialOfNumber(number) {
  if (number < 2) {
    return 1
  }

  return number * getFactorialOfNumber(number - 1)
}

const gridSize = 20

const numberOfPaths =
  getFactorialOfNumber(2 * gridSize) / getFactorialOfNumber(gridSize) ** 2

console.log(numberOfPaths)
