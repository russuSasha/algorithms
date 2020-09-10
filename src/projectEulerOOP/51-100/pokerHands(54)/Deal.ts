import Card from './CardInterface'
import Player from './Player'

class Deal {
  private readonly firstPlayerHand: Card[]
  private readonly secondPlayerHand: Card[]

  constructor(hands: string) {
    const handsArray: Card[] = hands.split(' ').map(this.transformCard)

    this.firstPlayerHand = handsArray.slice(0, 5).sort(this.compareCards)
    this.secondPlayerHand = handsArray.slice(5).sort(this.compareCards)
  }

  private transformCard(card: string): Card {
    interface ValueMap {
      [propName: string]: number
    }

    const valueMap: ValueMap = {
      T: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    }

    return {
      value: valueMap[card[0]] || +card[0],
      suit: card[1],
    }
  }

  private compareCards(firstCard: Card, secondCard: Card): number {
    return secondCard.value - firstCard.value
  }

  public isFirstPlayerWon() {
    const firstPlayer = new Player(this.firstPlayerHand)
    const secondPlayer = new Player(this.secondPlayerHand)

    return firstPlayer.getPoints() > secondPlayer.getPoints()
  }
}

export default Deal
