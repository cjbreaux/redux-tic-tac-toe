export default (state = {
  squares: Array(9).fill(null),
  xIsNext: false}, action) => {
  switch (action.type) {
  case 'SELECT_BOX':
    const {squares, xIsNext} = action
    let newState = Object.assign({}, state, {
      squares,
      xIsNext
    })
    return newState
  default:
    return state
  }
}
