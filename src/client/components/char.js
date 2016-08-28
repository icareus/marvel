import React from 'react'

const Char = ({char}) => {
  console.log(char, 'in char');
  return (
    <div className='list padded'>
      <h4>{char.name}</h4>
      <div>
        <p>{char.description}</p>
      </div>
    </div>
  )
}

Char.defaultProps = {
  char: {
    id: 42,
    name: 'Loading...',
    descriptiom: '...'
  }
}

export default Char