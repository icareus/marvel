import React from 'react'
import { Link } from 'react-router'
import { map } from 'ramda'

import mapStateToProps from '../selectors/storeSelector'
import { fetchCharacters } from '../utils/api'
import { connect } from 'react-redux'
import { CharThumb } from './charthumb'

class Chars extends React.Component {
  componentWillMount() {
    this.props.fetchChars()
  }
	render() {
    return (
    <div className='list padded'>
      <ul>
      {map(
        // char => <li><Link to={`/characters/${char.id}`}>char.name</Link></li>,
        CharThumb,
        this.props.characters
      )}
      </ul>
    </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    fetchChars: fetchCharacters,
  })(Chars);
