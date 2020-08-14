function getFactorsCount(number) {
  let count = 0

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      count += 2
    }
  }

  return count - 1
}

let triangleNumber = 0

for (let i = 1; getFactorsCount(triangleNumber) <= 500; i++) {
  triangleNumber += i
}

console.log(triangleNumber)
