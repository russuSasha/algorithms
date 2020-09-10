import Card from './CardInterface'

type SameValueCards = Map<number, number>

class Player {
  private readonly sameValueCards: SameValueCards
  private readonly highestCardValue: number
  private readonly isStraight: boolean
  private readonly isFlush: boolean

  constructor(hand: Card[]) {
    const sameValueCards: SameValueCards = new Map()
    let highestCardValue: number = 0

    hand.forEach((item: Card) => {
      const sameValueCard: number | undefined = sameValueCards.get(item.value)

      if (sameValueCard) {
        sameValueCards.set(item.value, sameValueCard + 1)
      } else {
        sameValueCards.set(item.value, 1)
      }

      highestCardValue = Math.max(highestCardValue, item.value)
    })

    this.sameValueCards = sameValueCards
    this.highestCardValue = highestCardValue
    this.isStraight = this.isStraightCheck(hand)
    this.isFlush = this.isFlushCheck(hand)
  }

  private isStraightCheck(hand: Card[]): boolean {
    for (let i: number = 0; i < hand.length - 1; i++) {
      if (hand[i].value - hand[i + 1].value !== 1) {
        return false
      }
    }

    return true
  }

  private isFlushCheck(hand: Card[]): boolean {
    const firstCardSuit: string = hand[0].suit

    return hand.every((item: Card) => item.suit === firstCardSuit)
  }

  public getPoints(): number {
    if (this.isStraight && this.isFlush) {
      return this.highestCardValue * 1.58e6
    }

    let fourOfKindValue: number = 0
    let threeOfKindValue: number = 0
    let onePairValue: number = 0
    let twoPairsValue: number = 0

    for (const [cardValue, cardsCount] of this.sameValueCards) {
      if (cardsCount === 4) {
        fourOfKindValue = cardValue

        break
      }

      if (cardsCount === 3) {
        threeOfKindValue = cardValue
      }

      if (cardsCount === 2 && onePairValue > 0) {
        twoPairsValue = onePairValue + cardValue
        onePairValue = 0

        break
      }

      if (cardsCount === 2) {
        onePairValue = cardValue
      }
    }

    if (fourOfKindValue) {
      return fourOfKindValue * 225e3 + this.highestCardValue
    }

    if (threeOfKindValue && onePairValue) {
      return (threeOfKindValue + onePairValue) * 20e3 + this.highestCardValue
    }

    if (this.isFlush) {
      return 92e3 + this.highestCardValue
    }

    if (this.isStraight) {
      return this.highestCardValue * 6500
    }

    if (threeOfKindValue) {
      return threeOfKindValue * 900 + this.highestCardValue
    }

    if (twoPairsValue) {
      return twoPairsValue * 60 + this.highestCardValue
    }

    if (onePairValue) {
      return onePairValue * 20 + this.highestCardValue
    }

    return this.highestCardValue
  }
}

export default Player
