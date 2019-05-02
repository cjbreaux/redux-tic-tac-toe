import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board'
import calculateWinner from './../functions.js'
import { connect } from 'react-redux'

function Game(props) {
 console.log(props)
 let winner = calculateWinner(props.historyReducer.history[0].squares);
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          {winner}
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    historyReducer: state
  }
}

Game = connect(mapStateToProps)(Game)

export default Game
