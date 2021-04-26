import React, { Component } from 'react'
import JokeCard from '../JokeCard/JokeCard'
import './JokesList.css'
import JokesContext from '../jokesContext'

class JokesList extends Component {
    static defaultProps = {
        jokes: []
        }
    
    static contextType = JokesContext
      
    render() {
        const { jokes } = this.context
        const sortedJokes = [...jokes].sort((a,b) => new Date(b.date_submitted) - new Date(a.date_submitted))
                    
            return (
                <section className='JokeCardList'>
                <h2 className='joke-list-heading'>Let's Have A Chuckle...</h2>

                    <ul className='jokes-container' aria-live='polite'>
                        {sortedJokes.map(joke =>
                            <JokeCard 
                                key={joke.id} 
                                {...joke}
                            />
                        )}
                    </ul>
                    {/* <Link className='add-joke-link' to={'/add-joke'}>Tell Us A Joke</Link> */}
                </section>
            )
    }
}

export default JokesList;