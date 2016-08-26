import fetch from 'isomorphic-fetch'
import { createHash } from 'crypto'
import { curry } from 'ramda'

import { addChars } from '../actions/chars'

const API_PUBLIC = '2a1fa8e58afe69d776a0ec7ed409c791'
const API_PRIVATE = '0bdbfdab2e33ec304f4cb7825243178cadbdf43e'
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

export const fetchCharacters = () => dispatch =>
  fetch(`${BASE_URL}/${URI}${genParams()}`, fetchOptions)
  .then(res => res.json())
  .then(json => dispatch(addChars(json.data.results))).catch(console.warn)
