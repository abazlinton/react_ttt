import React from 'react';
import Grid from '../components/Grid';
import GameStatus from '../components/GameStatus';
import WIN_LINES from '../helpers/winLines';
import Button from '../components/Button'

class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
      gameOver: false
    };

    this.takeCell = this.takeCell.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  takeCell(location) {
    if (!this.state.grid[location] && !this.state.winner) {
      const newGrid = this.state.grid.slice();
      newGrid[location] = this.state.currentPlayer;
      this.setState({ grid: newGrid }, this.checkForGameOver);
    }
  }

  checkForGameOver() {
    const grid = this.state.grid;
    const currentPlayer = this.state.currentPlayer;

    WIN_LINES.forEach((winLine) => {
      if (winLine.every(cellNo => grid[cellNo] === currentPlayer)) {
        this.setState({ winner: currentPlayer, gameOver: true })
        // this.newGame();
      }
    })
    if (!this.state.gameOver && this.gridComplete()) {
      this.setState({ winner: "DRAW", gameOver: true });
      // this.newGame();
    }
    if (!this.state.gameOver) this.nextTurn();
  }

  newGame() {
    this.setState({
      grid: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
      gameOver: false
    })
  }

  gridComplete() {
    return !this.state.grid.includes(null);
  }

  nextTurn() {
    let nextPlayer = "";
    if (this.state.currentPlayer === "X") {
      nextPlayer = "O"
    } else {
      nextPlayer = "X"
    }
    this.setState({ currentPlayer: nextPlayer });
  }


  render() {
    return (
      <div>
        <Grid
          grid={this.state.grid}
          takeCell={this.takeCell}
        />
        <GameStatus
          winner={this.state.winner}
        />
        <Button isVisible={this.state.gameOver} callback={this.newGame} text="Play Again"/>
      </div>
    )
  }
}

export default TicTacToe;