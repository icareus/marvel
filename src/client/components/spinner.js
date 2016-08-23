import React from 'react'
import { IDLE } from '../actions/api'

const Spinner = ({ status }) => {
  if (status === IDLE) {
    return (<div className='spinner'></div>)
  }
  return (
    <div className='spinner'>
      <div className='rect1'></div>
      <div className='rect2'></div>
      <div className='rect3'></div>
      <div className='rect4'></div>
      <div className='rect5'></div>
    </div>)
}

Spinner.propTypes = {
  status: React.PropTypes.string.isRequired,
}

export default Spinner
