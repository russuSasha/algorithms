import Card from './CardInterface'

export default function (hand: Card[]): boolean {
  const firstCardSuit = hand[0].suit

  return hand.every((item) => item.suit === firstCardSuit)
}
