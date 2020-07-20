function getProductABC(sumABC) {
  for (let a = 1; ; a++) {
    for (let b = a + 1; b < sumABC / 2; b++) {
      const c = Math.sqrt(a ** 2 + b ** 2)

      if (a + b + c === sumABC) {
        return a * b * c
      }
    }
  }
}

console.log(getProductABC(1000))
