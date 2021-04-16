import React from 'react'
import Moment from 'react-moment'

import './JokeCard.css'

function JokeCard(props){
        return (
            <div>
                <div className='joke-card'>
                    <p className='joke'>{props.joke}</p>
                    <p className='punchline'>{props.punchline}</p>
                    <p className='user-name'>Submitted By: {props.submitted_by}</p>
                    <Moment format='MMM D, YYYY' className='date-submitted'>{props.date_submitted}</Moment>
                </div>
            </div>
            
        )
    }


export default JokeCard;