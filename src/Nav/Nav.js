import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {
    return (
        <nav className='Nav'>
          <Link className='nav-link' to={'/'}>Home</Link>
          {' '}
          <Link className='nav-link' to={'/jokes-list'}>Jokes</Link>
          {' '}
          <Link className='nav-link' to={'/add-joke'}>Tell Us A Joke</Link>
        </nav>
    )
}