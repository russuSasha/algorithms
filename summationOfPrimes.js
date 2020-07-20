let sum = 5

function isPrime(number) {
  if (number % 2 === 0 || number % 3 === 0) {
    return false
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false
    }
  }

  return true
}

for (let i = 5; i < 2e6; i += 2) {
  if (isPrime(i)) {
    sum += i
  }
}

console.log(sum)
