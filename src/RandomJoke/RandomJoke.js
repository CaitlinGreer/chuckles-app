import React, { Component } from 'react' 

import './RandomJoke.css'

class RandomJoke extends Component {
    render() {
        return (
            <div className='random-joke'>
                <p className='joke'>What did the fish say when it swam into the wall?</p>
                <p className='punchline'>Dam!</p>
            </div>
            

        )
    }
}

export default RandomJoke;