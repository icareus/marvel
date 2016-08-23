import React from 'react'
import { Link } from 'react-router'
import { map } from 'ramda'

export const Chars = ({...args}) => {
	console.log(args);
	return (
  <div className='list padded'>
    <ul>
      <li><Link to='/characters/42'>42</Link></li>
      <li><Link to='/characters/84'>84</Link></li>
    </ul>
  </div>
)}
