import React from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <header className='header'>
                    <h1 className='header-title'>Chuckles</h1>
                    <h2 className='subheader'>Where Dad Jokes Are Our Specialty</h2>
                </header>
            </div>
        )
    }
}

export default Header;