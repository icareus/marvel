/**
 * Created by Antoine on 19/07/2016.
 */
import { union } from 'ramda'
import { ADD_CHARS } from '../actions/chars'


const characters = (state = {}, action) => {
  switch(action.type) {
    case ADD_CHARS:
      return union(state, action.chars)

    default:
      return state
  }
}

export default characters
