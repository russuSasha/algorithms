import Game from './Game'

async function calculateGame() {
  const game = new Game()

  await game.init('./poker.txt')

  return game.howManyDealsFirstPlayerWon()
}

calculateGame().then(console.log)
