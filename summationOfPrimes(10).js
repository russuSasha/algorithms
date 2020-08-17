const isNumberPrime = require('./utils').isNumberPrime

let sum = 5

for (let i = 5; i < 2e6; i += 2) {
  if (isNumberPrime(i)) {
    sum += i
  }
}

console.log(sum)
