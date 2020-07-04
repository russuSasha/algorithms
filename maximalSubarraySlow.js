function getMaxSubSum(arr) {
  let maxSubSum = 0

  for (let i = 0; i < arr.length - 1; i++) {
    let isPositive = false

    for (let j = i, sum = 0; j < arr.length - 1; j++) {
      if (arr[j] > 0) {
        isPositive = true
      }

      sum += arr[j]

      maxSubSum = Math.max(maxSubSum, sum)
    }

    if (i === 0 && !isPositive) {
      maxSubSum = 0
    }
  }

  return maxSubSum
}

console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]))
