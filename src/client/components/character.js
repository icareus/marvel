import React from 'react'

export class Character extends React.Component {
  render() {
    return (
      <div>{this.props.params.id}</div>
    )
  }
}

Character.propTypes = {
  params: React.PropTypes.object.isRequired,
}
