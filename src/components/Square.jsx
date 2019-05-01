import React from 'react'
import { connect } from 'react-redux'
import historyReducer from './../reducers/history-reducer.js'

function Square(props) {
  function updater() {
    const { dispatch } = props
    const action = {
      type: 'SELECT_BOX',
      selectedBox: props.value
    };
    dispatch(action)
  }
  return (
    <button
      onClick={updater}
      className="square">
      {props.value}
    </button>
  )
}

const mapStateToProps = state => {
  return {
    historyReducer: state
  }
}

Square = connect()(Square)

export default Square
