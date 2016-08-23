import { createSelector } from 'reselect'

import { prop } from 'ramda'

// const getApiStatus = state => state.api
// const getLists = state => state.lists
// const getTasks = state => state.tasks
const getChars = prop('characters')

const storeSelector = createSelector(
  getChars,
  characters => ({ characters })
)

export default storeSelector
