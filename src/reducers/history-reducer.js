export default (state = {history: [{
       squares: Array(9).fill(null),
    }],}, action) => {
  switch (action.type) {
  case 'SELECT_BOX':
    const {history, value, squares} = action
    let newState = Object.assign({}, state, {
      squares
    })
    return newState
  default:
    return state
  }
}
