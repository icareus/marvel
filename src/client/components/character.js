import React from 'react'
import { connect } from 'react-redux'

import { fetchById } from '../utils/api'
import mapStateToProps from '../selectors/storeSelector'


class Character extends React.Component {
  componentWillMount() {
    this.props.fetchOne(this.props.params.id)
  }
  render() {
    return (
    <div id={this.props.params.id}>
      <div className='list padded'>{this.props.params.id}</div>
    </div>
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
