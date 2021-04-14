import React, { Component } from 'react'

import './JokeCard.css'

class JokeCard extends Component {
    render() {
        return (
            <div>
                <div className='user-joke'>
                    <p className='joke'>What did the custodian say when he jumped out of the closet?</p>
                    <p className='punchline'>Supplies!!!</p>
                    <p className='user-name'>Submitted By: </p>
                </div>
                <div className='user-joke'>
                    <p className='joke'>What do sprinters eat before a race?</p>
                    <p className='punchline'>Nothing.  They fast.</p>
                    <p className='user-name'>Submitted By:</p>
                </div>
                <div className='user-joke'>
                    <p className='joke'>What did the pirate say on his 80th birthday?</p>
                    <p className='punchline'>"Aye, matey!"</p>
                    <p className='user-name'>Submitted By: </p>
                </div>
                <div className='user-joke'>
                    <p className='joke'>How do you organize a party in space?</p>
                    <p className='punchline'>You planet</p>
                    <p className='user-name'>Submitted By:</p>
                </div>
                <div className='user-joke'>
                    <p className='joke'>What kinds of pictures do hermit crabs take?</p>
                    <p className='punchline'>Shellfies</p>
                    <p className='user-name'>Submitted By:</p>
                </div>
            </div>
            
        )
    }
}

export default JokeCard;