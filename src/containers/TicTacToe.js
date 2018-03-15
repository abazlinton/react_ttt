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
      winner: null
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
    let winner = null;

    WIN_LINES.forEach((winLine) => {
      if (winLine.every(cellNo => this.state.grid[cellNo] === this.state.currentPlayer)) {
        winner = this.state.currentPlayer;
      }
    })

    if (!winner && this.gridComplete()) {
      winner = "DRAW";
    }

    winner ? this.setState({winner: winner}) : this.nextTurn()
  }

  newGame() {
    this.setState({
      grid: Array(9).fill(null),
      currentPlayer: "X",
      winner: null
    })
  }

  gridComplete() {
    return !this.state.grid.includes(null);
  }

  nextTurn() {
    if (this.state.currentPlayer === "X") {
      this.setState({ currentPlayer: "O" })
    } else {
      this.setState({ currentPlayer: "X" })
    }
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
        <Button isVisible={this.state.winner} callback={this.newGame} text="Play Again"/>
      </div>
    )
  }
}

export default TicTacToe;