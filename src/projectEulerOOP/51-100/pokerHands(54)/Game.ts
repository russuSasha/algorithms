import fs from 'fs'
import Deal from './Deal'

class Game {
  private handsDealt: string[] = []

  public init(inputFIlePath: string) {
    return fs.promises.readFile(inputFIlePath).then((data: Buffer) => {
      this.handsDealt = data.toString().split('\n')
    })
  }

  public howManyDealsFirstPlayerWon(): number {
    return this.handsDealt.reduce((accumulator: number, item: string) => {
      if (!item) {
        return accumulator
      }

      const deal = new Deal(item)

      if (!deal.isFirstPlayerWon()) {
        return accumulator
      }

      return accumulator + 1
    }, 0)
  }
}

export default Game
