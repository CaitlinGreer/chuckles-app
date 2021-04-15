import React, { Component } from 'react'
import JokeCard from '../JokeCard/JokeCard'
import './JokesList.css'
import dummyJokes from '../DummyJokes'

class JokesList extends Component {
      
    render() {
        const jokeCards = dummyJokes.map(joke => {
            return (
                <JokeCard 
                    key={joke.id} 
                    joke={joke.joke}
                    punchline={joke.punchline}
                    submitted_by={joke.submitted_by}
                />
            )
        })
        return (
            <div>
                <h2 className='joke-list-heading'>Let's Have A Chuckle...</h2>
            <div className='jokes-container'>
                {jokeCards}
            </div>
            </div>
        )
    }
}

export default JokesList;