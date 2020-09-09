import fs from 'fs'
import isFirstPlayerWon from './isFirstPlayerWon'

fs.promises.readFile('./poker.txt').then((data) => {
  const firstPlayerWinsCount = data
    .toString()
    .split('\n')
    .reduce((accumulator: number, item: string) => {
      if (!item || !isFirstPlayerWon(item)) {
        return accumulator
      }

      return accumulator + 1
    }, 0)

  console.log(firstPlayerWinsCount)
})
