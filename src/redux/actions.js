export const START_GAME = 'START GAME'
export const TAKE_SQUARE = 'TAKE_SQUARE'

export const startGame = () => ({
  type: START_GAME
})

export const takeSquare = (location) => ({
  type: TAKE_SQUARE,
  location
})