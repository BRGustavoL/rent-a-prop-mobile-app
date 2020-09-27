export default placeCarouselIndex = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLACE_CAROUSEL_INDEX':
      return action.index
    default:
      return state
  }
}
