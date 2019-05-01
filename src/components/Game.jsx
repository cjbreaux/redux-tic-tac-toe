import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board'
import calculateWinner from './../functions.js'
import { connect } from 'react-redux'

class Game extends React.Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
        </div>
      </div>
    )
  }
}

Game = connect()(Game)

export default Game
