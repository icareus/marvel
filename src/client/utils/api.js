import fetch from 'isomorphic-fetch'
import { createHash } from 'crypto'
import { curry } from 'ramda'

import { addChars } from '../actions/chars'

const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5'
const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d'
const BASE_URL = 'http://gateway.marvel.com:80'
const URI = 'v1/public/characters'

const genHash = ts => createHash('md5')
  .update(`${ts}${API_PRIVATE}${API_PUBLIC}`)
  .digest('hex')

const genParams = () => {
  const ts = Date.now();
  return `?ts=${ts}&apikey=${API_PUBLIC}&hash=${genHash(ts)}`
}

const fetchOptions = {
  // mode: 'cors',  
  method: 'GET',
  headers: {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}

export const fetchCharacters = dispatch =>
  fetch(`${BASE_URL}/${URI}${genParams()}`, fetchOptions)
  .then(res => res.json())
  .then(json => dispatch(addChars(json.data))).catch(console.warn)

// const doFetch = (endpoint, options) => (
//   fetch(API_URL + endpoint, options))

// export const working = (what) => ({
//   type: BUSY,
//   what,
// })

// export const apiCall = (options) => (endpoint) => (onResult) => {
//   doFetch(endpoint, options)
//     .then(
//       response => response.json(),
//       err => { console.warn(err) })
//     .then(json => onResult(json))
//     .catch(e => console.warn(e, onResult, options.method))
// }
