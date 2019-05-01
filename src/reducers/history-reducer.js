export default (state = {selectedBox: null}, action) => {
  switch (action.type) {
  case 'SELECT_BOX':
    const {selectedBox} = action
    let newState = Object.assign({}, state, {
      selectedBox,
    })
    return newState
  default:
    return state
  }
}
