let sum = 0

for (let a = 1, b = 1; b < 4e6; b += a, a = b - a) {
  if (b % 2 === 0) {
    sum += b
  }
}

console.log(sum)
