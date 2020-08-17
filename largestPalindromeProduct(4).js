function getLargestPalindromeProduct() {
  let largestPalindromeProduct = 0

  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      const product = String(i * j)

      if (
        product ===
        product
          .split('')
          .reverse()
          .join('')
      ) {
        largestPalindromeProduct = Math.max(largestPalindromeProduct, +product)
      }
    }
  }

  return largestPalindromeProduct
}

console.log(getLargestPalindromeProduct())
