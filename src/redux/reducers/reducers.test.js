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

  it('current player cannot take if square occupied', () => {
    const fakeState = { grid: ['O'], currentPlayer: 'X'}
    const moveMadeState = game(fakeState, takeSquare(0))
    expect(moveMadeState.grid).toEqual(['O']) 
  });

  it('switches player from X to O once move has been made', () => {
    const fakeState = { grid: [null], currentPlayer: 'X'}
    const moveMadeState = game(fakeState, takeSquare(0))
    expect(moveMadeState.currentPlayer).toEqual('O') 
  });

  it('switches player from O to X once move has been made', () => {
    const fakeState = { grid: [null], currentPlayer: 'O'}
    const moveMadeState = game(fakeState, takeSquare(0))
    expect(moveMadeState.currentPlayer).toEqual('X') 
  });

  it('does not switch player if square occupied', () => {
    const fakeState = { grid: ['O'], currentPlayer: 'X'}
    const moveMadeState = game(fakeState, takeSquare(0))
    expect(moveMadeState.currentPlayer).toEqual('X') 
  });

  it('starts with game not started', () => {
    const nextState = game(undefined, {})
    expect(nextState.gameStarted).toBe(false)
  });


  it('keeps track of game having started', () => {
    const initialState = game(undefined, {})
    const nextState = game(initialState, startGame())
    expect(nextState.gameStarted).toBe(true)
  });

  it('keeps track of game not being over', () => {
    const initialState = game(undefined, {})
    expect(initialState.gameOver).toBe(false)
  });

  it('keeps track of game having ended once grid is full', () => {
    const fakeState = { grid: [null], currentPlayer: 'X'}
    const nextState = game(fakeState, takeSquare(0))
    expect(nextState.gameOver).toBe(true)
  });


  
});