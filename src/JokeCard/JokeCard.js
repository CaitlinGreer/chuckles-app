import React from 'react'

import './JokeCard.css'

function JokeCard(props){
        return (
            <div>
                <div className='joke-card'>
                    <p className='joke'>{props.joke}</p>
                    <p className='punchline'>{props.punchline}</p>
                    <p className='user-name'>Submitted By: {props.submitted_by}</p>
                    <p className='date-submitted'>{props.date_submitted}</p>
                </div>
            </div>
            
        )
    }


export default JokeCard;