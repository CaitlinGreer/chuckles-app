import React, { Component } from 'react' 
import JokeCard from '../JokeCard/JokeCard'
import JokesContext from '../jokesContext'
import './RandomJoke.css'

class RandomJoke extends Component {
    static defaultProps = {
        jokes: []
    }

    static contextType = JokesContext

    render() {
        const { jokes } = this.context
        const randomJoke = jokes[Math.floor(Math.random()*jokes.length)]
        
        return (
            <div className='random-joke-container'>
                <JokeCard   
                    {...randomJoke} />
            </div>
            

        )
    }
}

export default RandomJoke;