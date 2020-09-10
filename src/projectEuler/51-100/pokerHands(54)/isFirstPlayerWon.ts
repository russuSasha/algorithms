// High Card: Highest value card. 1  2-14
// One Pair: Two cards of the same value. 2  40-280 (2*20-14*20)
// Two Pairs: Two different pairs. 3  300-1620 ((2+3)*60-(13+14)*60)
// Three of a Kind: Three cards of the same value. 4  1800-12600 (2*900-14*900)
// Straight: All cards are consecutive values. 5  13000-91000 (2*6500-14*6500)
// Flush: All cards of the same suit. 6  92000
// Full House: Three of a kind and a pair. 7  100000-540000 (5*20000-27*20000) !!!
// Four of a Kind: Four cards of the same value. 8  550000-3150000 (2*225000-14*225000)
// Straight Flush: All cards are consecutive values of same suit. 9  3160000-22120000 (2*1580000-14*1580000)
// Royal Flush: Ten, Jack, Queen, King, Ace, in same suit. 10

// 2, 3, 4, 5, 6, 7, 8, 9, 10 => T, Jack => J, Queen => Q, King => K, Ace => A
// A K Q J T 9 8 7 6 5 4 3 2

import Card from './CardInterface'
import getHandPoints from './getHandPoints'

function transformCard(card: string): Card {
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

function compareCards(firstCard: Card, secondCard: Card): number {
  return secondCard.value - firstCard.value
}

export default function (hands: string): boolean {
  const handsArray: Card[] = hands.split(' ').map(transformCard)

  let leftHand: Card[] = handsArray.slice(0, 5).sort(compareCards)
  let rightHand: Card[] = handsArray.slice(5).sort(compareCards)

  return getHandPoints(leftHand) > getHandPoints(rightHand)
}
