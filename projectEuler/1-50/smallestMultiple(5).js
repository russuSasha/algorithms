function getSmallestMultipleOfNumbers(from, to) {
  mainLoop: for (let i = to; ; i++) {
    for (let j = to; j >= from; j--) {
      if ((i * to) % j !== 0) {
        continue mainLoop
      }
    }

    return i * to
  }
}

console.log(getSmallestMultipleOfNumbers(1, 20))
