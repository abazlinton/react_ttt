import { START_GAME, TAKE_SQUARE } from "../actions";

const startState = {
  grid: new Array(9).fill(null),
  winner: null,
  currentPlayer: null
}


function game(state = startState, action) {
  switch (action.type) {
    case START_GAME: {
      const newState = { ...state }
      newState.currentPlayer = 'X'
      return newState
    }

    case TAKE_SQUARE: {
      const newState = { ...state }
      if (!newState.grid[action.location]) {
        newState.grid[action.location] = newState.currentPlayer
      }
      return newState
    }

    default:
      return state
  }
}

export { game }