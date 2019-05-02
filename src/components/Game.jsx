import React from 'react'
import Board from './Board'
import calculateWinner from './../functions.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Game(props) {
  let winner = calculateWinner(props.historyReducer.squares)
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

Game.propTypes = {
  squares: PropTypes.object,
  historyReducer: PropTypes.object
}


export default connect(mapStateToProps)( Game)
