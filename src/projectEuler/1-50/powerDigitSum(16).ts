function sumOfNumberDigits(number: bigint): number {
  return [...String(number)].reduce(
    (accumulator: number, currentValue: string): number => accumulator + +currentValue,
    0
  )
}

const baseNumber = 2n
const exponentOfPower = 1000n

const power = baseNumber ** exponentOfPower

console.log(sumOfNumberDigits(power))
