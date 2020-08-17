let maxSequenceLength = 0
let startingNumber = 0

for (let i = 1e6 - 1; i >= 1; i--) {
  let sequenceLength = 1

  for (let start = i; start > 1; sequenceLength++) {
    if (start % 2 === 0) {
      start /= 2
    } else {
      start = start * 3 + 1
    }
  }

  if (sequenceLength > maxSequenceLength) {
    maxSequenceLength = sequenceLength
    startingNumber = i
  }
}

console.log(startingNumber)
