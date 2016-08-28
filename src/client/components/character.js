import React from 'react'
import { connect } from 'react-redux'

import { fetchById } from '../utils/api'
import mapStateToProps from '../selectors/storeSelector'

import Char from './char'

// LOGIC => TODO w/ Ramda ?
// prop() => get selected attribute
// find in this.props where prop 
// == compose(prop)
// => upgrade selectors for memoization
// why not dispatch fetch in selector to 
// charprop = chars, id, prop 

import R from 'ramda'
// cleaner =>
// see if object matches : 
// takes expected value, returns object matching func
const charMatch = R.propEq('id')
// match proper object depending on custom predicate
const charFind = R.find(charMatch)// takes set, returns subset
// 
// R.find(this.props)
class Character extends React.Component {
  componentWillMount() {
    this.props.fetchOne(this.props.params.id)
  }
  render() {
    return (
      <Char char={this.props.characters[0]} />
    )
  }
}

Character.propTypes = {
  params: React.PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  {
    fetchOne: fetchById,
  })(Character);
