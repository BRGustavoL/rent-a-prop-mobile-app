export default userLocation = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_LOCALTION':
      return action.location
    default:
      return state
  }
}
