/**
 * Created by Antoine on 19/07/2016.
 */
import { merge } from 'ramda'
import { ADD_CHARS } from '../actions/chars'


const characters = (state = {}, action) => {
  switch(action.type) {
    case ADD_CHARS:
      return merge(state, action.chars)

    default:
      return state
  }
}

export default characters
