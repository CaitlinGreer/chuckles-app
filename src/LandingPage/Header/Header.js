import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'


class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <header className='header'>
                    <h1 className='header-title'>Welcome To Chuckles</h1>
                    <h2 className='subheader'>Read a joke, share a joke, chuckle and repeat!</h2>
                </header>
                <FontAwesomeIcon icon={ faArrowCircleDown } className='icon' />
            </div>
        )
    }
}

export default Header;