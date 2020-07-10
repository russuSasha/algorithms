function getLargestPrimeFactor(num, factors = []) {
  if (num % 2 === 0) {
    return getLargestPrimeFactor(num / 2, [...factors, 2])
  }

  for (let i = 3; i < num / 3; i += 2) {
    if (num % i === 0) {
      return getLargestPrimeFactor(num / i, [...factors, i])
    }
  }

  return num
}

console.log(getLargestPrimeFactor(600851475143))
