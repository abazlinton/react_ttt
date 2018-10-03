import { START_GAME, TAKE_SQUARE } from "../actions";

const startState = {
  grid: new Array(9).fill(null),
  winner: null,
  currentPlayer: null,
  gameStarted: false,
  gameOver: false
}


function isGridComplete(grid) {
  return grid.every(square => square === 'X' || square === 'O')
}

function getNextPlayer(currentPlayer) {
  return currentPlayer === 'X' ? 'O' : 'X'
}

function game(state = startState, action) {
  switch (action.type) {

    case START_GAME: {
      const newState = { ...state }
      newState.currentPlayer = 'X'
      newState.gameStarted = true
      return newState
    }

    case TAKE_SQUARE: {
      const newState = { ...state }
      if (!newState.grid[action.location]) {
        newState.grid[action.location] = newState.currentPlayer
        newState.currentPlayer = getNextPlayer(newState.currentPlayer)
      }
      if (isGridComplete(newState.grid)) {
        newState.gameOver = true
      }
      return newState
    }

    default:
      return state
  }
}

export { game }