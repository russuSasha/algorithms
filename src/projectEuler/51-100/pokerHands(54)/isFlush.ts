import Card from './CardInterface'

export default function (hand: Card[]): boolean {
  const firstCardSuit: string = hand[0].suit

  return hand.every((item: Card) => item.suit === firstCardSuit)
}
