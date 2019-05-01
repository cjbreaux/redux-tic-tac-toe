import React from 'react'
import { connect } from 'react-redux'
import historyReducer from './../reducers/history-reducer.js'

// let mark;
// if (props.value === props.historyReducer.selectedBox) {
//   mark = props.historyReducer.value;
// }

function Square(props) {
  console.log(props)
  function updater() {
    const { dispatch } = props
    const action = {
      type: 'SELECT_BOX',
      selectedBox: props.value,
      value: 'X'
    };
    dispatch(action)
  }
  return (
    <button
      onClick={updater}
      className="square">
      {mark}


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
