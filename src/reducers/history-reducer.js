export default (state = {selectedBox: null}, action) => {
  switch (action.type) {
  case 'SELECT_BOX':
    const {selectedBox, value} = action
    let newState = Object.assign({}, state, {
      selectedBox,
      value
    })
    return newState
  default:
    return state
  }
}
