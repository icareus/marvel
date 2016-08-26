import React from 'react'
import { Link } from 'react-router'

export const CharThumb = char => (
  <li key={char.id}><Link to={`/characters/${char.id}`}>
    <div className='character'>
      <p>{char.name}</p>
    </div>
  </Link></li>
)
