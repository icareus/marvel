/**
 * Created by Antoine on 19/07/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

import UiBar from '../components/uibar'
import mapStateToProps from '../selectors/storeSelector'

import { addChars } from '../actions/chars'
import { fetchCharacters } from '../utils/api'

const App = ({ characters = [], children, ...handlers }) => (
  <div className='app-wrapper'>
    <span><h1>Component reusability is awesome @_@</h1></span>
    <UiBar handlers={ handlers } />
    {children}
  </div>
)

App.propTypes = {
  characters: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func,
}

export default connect(
  mapStateToProps,
  {
    fetchCharacters: fetchCharacters,
  })(App);
