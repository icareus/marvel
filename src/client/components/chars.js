import React from 'react'
import { Link } from 'react-router'
// import R from 'ramda'

export const Chars = characters => {
	console.log(characters);
	return (
  <div>
    <ul>
      <li><Link to='/characters/42'>42</Link></li>
      <li><Link to='/characters/84'>84</Link></li>
    </ul>
  </div>
)}
