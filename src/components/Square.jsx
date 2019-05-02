import React from 'react'
import { connect } from 'react-redux'
import historyReducer from './../reducers/history-reducer.js'
import calculateWinner from './../functions.js';



function Square(props) {
  let winner;
  function updater() {
    const newSquares = props.historyReducer.history[0].squares;
    const newTurn = !props.historyReducer.xIsNext;
    props.historyReducer.xIsNext ? newSquares[props.value] = 'X' : newSquares[props.value] = 'O'
    const { dispatch } = props
    const action = {
      type: 'SELECT_BOX',
      squares: newSquares,
      xIsNext: newTurn
    };
    dispatch(action)
  }
  // console.log(props.historyReducer.history[0].squares[props.value])


  return (
    <button
      onClick={updater}
      className="square">
      {props.historyReducer.history[0].squares[props.value]}
    </button>
  )
}

const mapStateToProps = state => {
  return {
    historyReducer: state
  }
}

Square = connect(mapStateToProps)(Square)

export default Square
