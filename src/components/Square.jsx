import React from 'react'
import { connect } from 'react-redux'
import historyReducer from './../reducers/history-reducer.js'



function Square(props) {
  function updater() {
    const newSquares = props.historyReducer.history[0].squares
    newSquares[props.value] = 'X'
    const { dispatch } = props
    const action = {
      type: 'SELECT_BOX',
      value: props.value,
      squares: newSquares
    };
    dispatch(action)
  }
  return (
    <button
      onClick={updater}
      className="square">




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
