const numbers = []

for (let i = 1; i <= 100; i++) {
  numbers.push(i)
}

const squareOfTheSum =
  numbers.reduce((total, current) => total + current, 0) ** 2

const sumOfTheSquares = numbers.reduce(
  (total, current) => total + current ** 2,
  0,
)

console.log(squareOfTheSum - sumOfTheSquares)
