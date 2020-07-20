let prime = 2

function isPrime(num) {
  if (num % 2 === 0) {
    return false
  }

  for (let i = 3; i < num / 3; i += 2) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

for (let i = 1; i <= 10001; i++) {
  for (let j = prime + 1; ; j++) {
    if (isPrime(j)) {
      prime = j

      break
    }
  }
}

console.log(prime)
