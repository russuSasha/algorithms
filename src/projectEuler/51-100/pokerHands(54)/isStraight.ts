import Card from './CardInterface'

export default function (hand: Card[]): boolean {
  for (let i: number = 0; i < hand.length - 1; i++) {
    if (hand[i].value - hand[i + 1].value !== 1) {
      return false
    }
  }

  return true
}
