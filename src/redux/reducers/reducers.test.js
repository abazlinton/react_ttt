import { game } from './reducers'
import { startGame, takeSquare } from '../actions'
import deepFreeze from 'deep-freeze';

describe('TicTacToe', () => {

  it('starts with empty grid', () => {
    const nextState = game(undefined, {})
    expect(nextState.grid).toEqual([null, null, null, null, null, null, null, null, null]) 
  });

  it('starts with no winner', () => {
    const nextState = game(undefined, {})
    expect(nextState.winner).toBeNull()
  });

  it('starts with no player to move', () => {
    const nextState = game(undefined, {})
    expect(nextState.currentPlayer).toBe(null)
  });
  
  it('starts with no player to move', () => {
    const startState = {}
    deepFreeze(startState)
    const nextState = game(startState, startGame())
    expect(nextState.currentPlayer).toBe('X')
  });

  it('current player can take a square', () => {
    const gameStartedState = game(undefined, startGame());
    const moveMadeState = game(gameStartedState, takeSquare(0))
    expect(moveMadeState.grid).toEqual(['X', null, null, null, null, null, null, null, null]) 
  });

  it('current player cannot take an already occupied square', () => {
    const fakeState = { grid: ['O'], currentPlayer: 'X'}
    const moveMadeState = game(fakeState, takeSquare(0))
    expect(moveMadeState.grid).toEqual(['O']) 
  });

  
});