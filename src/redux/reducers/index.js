import { combineReducers } from 'redux'

import userLocation from './userLocation'
import placesCarouselPosition from './placesCarouselPosition'

export default combineReducers({
  userLocation,
  placesCarouselPosition
})
