import { game } from './reducers'
import { startGame } from '../actions'
import deepFreeze from 'deep-freeze';

describe('TicTacToe', () => {

  it('starts with empty grid', () => {
    const nextState = game(null, {})
    expect(nextState.grid).toEqual([null, null, null, null, null, null, null, null, null]) 
  });

  it('starts with no winner', () => {
    const nextState = game(null, {})
    expect(nextState.winner).toBeNull()
  });

  
  
});