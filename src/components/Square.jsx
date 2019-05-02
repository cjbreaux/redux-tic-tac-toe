import React from 'react'
import { connect } from 'react-redux'
import historyReducer from './../reducers/history-reducer.js'
import calculateWinner from './../functions.js';



function Square(props) {
  let winner = calculateWinner(props.historyReducer.history[0].squares);
  function updater() {
    const newSquares = props.historyReducer.history[0].squares;
    if (props.historyReducer.history[0].squares[props.value] != null) {
      var newTurn = props.historyReducer.xIsNext;
    } else {
      props.historyReducer.xIsNext ? newSquares[props.value] = 'X' : newSquares[props.value] = 'O';
      var newTurn = !props.historyReducer.xIsNext;
    }

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
      className="square"
      disabled={ winner === null ? false : true}>
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
