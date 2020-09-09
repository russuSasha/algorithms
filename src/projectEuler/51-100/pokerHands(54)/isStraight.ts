import Card from './CardInterface'

export default function (hand: Card[]): boolean {
  for (let i = 0; i < hand.length - 1; i++) {
    if (hand[i + 1].value - hand[i].value !== 1) {
      return false
    }
  }

  return true
}
