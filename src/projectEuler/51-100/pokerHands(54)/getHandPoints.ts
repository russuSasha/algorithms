import Card from './CardInterface'
import isStraightCheck from './isStraight'
import isFlushCheck from './isFlush'

export default function (hand: Card[]): number {
  let highestCard: number = 0
  const sameValueCards = new Map()

  hand.forEach((item) => {
    highestCard = Math.max(highestCard, item.value)

    if (sameValueCards.has(item.value)) {
      sameValueCards.set(item.value, sameValueCards.get(item.value) + 1)
    } else {
      sameValueCards.set(item.value, 1)
    }
  })

  const isStraight: boolean = isStraightCheck(hand)
  const isFlush: boolean = isFlushCheck(hand)

  if (isStraight && isFlush) {
    return highestCard * 1.58e6
  }

  let fourOfKind: number = 0
  let threeOfKind: number = 0
  let onePair: number = 0
  let twoPairs: number = 0

  for (const [key, value] of sameValueCards) {
    if (value === 4) {
      fourOfKind = +key

      break
    }

    if (value === 3) {
      threeOfKind = +key
    }

    if (value === 2 && onePair) {
      twoPairs = onePair + +key
      onePair = 0

      break
    }

    if (value === 2) {
      onePair = +key
    }
  }

  if (fourOfKind) {
    return fourOfKind * 225e3 + highestCard
  }

  if (threeOfKind && onePair) {
    return (threeOfKind + onePair) * 20e3 + highestCard
  }

  if (isFlush) {
    return 92e3 + highestCard
  }

  if (isStraight) {
    return highestCard * 6500
  }

  if (threeOfKind) {
    return threeOfKind * 900 + highestCard
  }

  if (twoPairs) {
    return twoPairs * 60 + highestCard
  }

  if (onePair) {
    return onePair * 20 + highestCard
  }

  return highestCard
}
