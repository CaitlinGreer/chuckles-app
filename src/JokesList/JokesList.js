import React, { Component } from 'react'
import JokeCard from '../JokeCard/JokeCard'
import './JokesList.css'

class JokesList extends Component {
    render() {
        return (
            <div>
                <h2 className='joke-list-heading'>Let's Have A Chuckle...</h2>
            <div className='jokes-container'>
                <JokeCard />
            </div>
            </div>
        )
    }
}

export default JokesList;