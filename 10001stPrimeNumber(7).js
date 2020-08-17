const isNumberPrime = require('./utils').isNumberPrime

let prime = 2

for (let i = 1; i <= 10001; i++) {
  for (let j = prime + 1; ; j++) {
    if (isNumberPrime(j)) {
      prime = j

      break
    }
  }
}

console.log(prime)
