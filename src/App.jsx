import React, { Component } from 'react'

export class App extends Component {
  state = {
    board: [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ],
    winner: null,
  }

  handleNewGame = async () => {
    const response = await fetch(
      'https://sdg-tic-tac-toe-api.herokuapp.com/game',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )

    const game = await response.json()

    this.setState(game)
  }

  handleClickCell = async (row, column) => {
    const url = `https://sdg-tic-tac-toe-api.herokuapp.com/game/${this.state.id}`
    const body = { row: row, column: column }
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })

    const game = await response.json()
    this.setState(game)
  }

  render() {
    let header = this.state.winner
      ? `${this.state.winner} is the winner`
      : 'Tic Tac Toe'

    return (
      <div>
        <h1>
          {header} - <button onClick={this.handleNewGame}>New</button>
        </h1>
        <ul>
          <li onClick={() => this.handleClickCell(0, 0)}>
            {this.state.board[0][0]}
          </li>
          <li onClick={() => this.handleClickCell(0, 1)}>
            {this.state.board[0][1]}
          </li>
          <li onClick={() => this.handleClickCell(0, 2)}>
            {this.state.board[0][2]}
          </li>
          <li onClick={() => this.handleClickCell(1, 0)}>
            {this.state.board[1][0]}
          </li>
          <li onClick={() => this.handleClickCell(1, 1)}>
            {this.state.board[1][1]}
          </li>
          <li onClick={() => this.handleClickCell(1, 2)}>
            {this.state.board[1][2]}
          </li>
          <li onClick={() => this.handleClickCell(2, 0)}>
            {this.state.board[2][0]}
          </li>
          <li onClick={() => this.handleClickCell(2, 1)}>
            {this.state.board[2][1]}
          </li>
          <li onClick={() => this.handleClickCell(2, 2)}>
            {this.state.board[2][2]}
          </li>
        </ul>
      </div>
    )
  }
}
