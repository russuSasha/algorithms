// High Card: Highest value card. 1
// One Pair: Two cards of the same value. 2
// Two Pairs: Two different pairs. 3
// Three of a Kind: Three cards of the same value. 4
// Straight: All cards are consecutive values. 5
// Flush: All cards of the same suit. 6
// Full House: Three of a kind and a pair. 7
// Four of a Kind: Four cards of the same value. 8
// Straight Flush: All cards are consecutive values of same suit. 9
// Royal Flush: Ten, Jack, Queen, King, Ace, in same suit. 10

// 2, 3, 4, 5, 6, 7, 8, 9, 10 => T, Jack => J, Queen => Q, King => K, Ace => A
// A K Q J T 9 8 7 6 5 4 3 2

// '8C TS KC 9H 4S 7D 2S 5D 3S AC' // Right won

export default function (hands: string) {
  interface Card {
    value: number
    suit: string
  }

  function getCardValue(card: string): number {
    interface CardToValueMap {
      [propName: string]: number
    }

    const cardToValueMap: CardToValueMap = {
      T: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    }

    return cardToValueMap[card] || +card
  }

  function transformCard(card: string): Card {
    return {
      value: getCardValue(card[0]),
      suit: card[1],
    }
  }

  function compareCards(firstCard: Card, secondCard: Card): number {
    return secondCard.value - firstCard.value
  }

  const array: string[] = hands.split(' ')

  let leftHand: Card[] = array.slice(0, 5).map(transformCard).sort(compareCards)
  let rightHand: Card[] = array.slice(5).map(transformCard).sort(compareCards)

  console.log(leftHand, rightHand)
}
