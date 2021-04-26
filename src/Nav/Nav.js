import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {
    return (
        <div className='nav-bar'>
          <h1><Link className='nav-link-header' to={'/'}>Chuckles</Link></h1>
          <ul className='nav-links'>
            <li>
              <Link to={'/jokes-list'}>Jokes</Link>
            </li>
            <li>
              <Link to={'/add-joke'}>Tell A Joke</Link>
            </li>
          </ul>
        </div>
    )
}