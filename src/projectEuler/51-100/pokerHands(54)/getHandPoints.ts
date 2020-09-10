import Card from './CardInterface'
import isStraightCheck from './isStraight'
import isFlushCheck from './isFlush'

type SameValueCards = Map<number, number>

export default function (hand: Card[]): number {
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

  const isStraight: boolean = isStraightCheck(hand)
  const isFlush: boolean = isFlushCheck(hand)

  if (isStraight && isFlush) {
    return highestCardValue * 1.58e6
  }

  let fourOfKindValue: number = 0
  let threeOfKindValue: number = 0
  let onePairValue: number = 0
  let twoPairsValue: number = 0

  for (const [cardValue, cardsCount] of sameValueCards) {
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
    return fourOfKindValue * 225e3 + highestCardValue
  }

  if (threeOfKindValue && onePairValue) {
    return (threeOfKindValue + onePairValue) * 20e3 + highestCardValue
  }

  if (isFlush) {
    return 92e3 + highestCardValue
  }

  if (isStraight) {
    return highestCardValue * 6500
  }

  if (threeOfKindValue) {
    return threeOfKindValue * 900 + highestCardValue
  }

  if (twoPairsValue) {
    return twoPairsValue * 60 + highestCardValue
  }

  if (onePairValue) {
    return onePairValue * 20 + highestCardValue
  }

  return highestCardValue
}
