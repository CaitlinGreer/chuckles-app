import React from 'react'
import Moment from 'react-moment'

import './JokeCard.css'

function JokeCard(props){
        return (
            <div>
                <div className='joke-card-container'>
                    <div className='joke-card'>
                        <div className='side'>{props.joke}</div>
                        <div className='side-back'>
                            <div className='punchline'>{props.punchline}</div>
                            <div className='user'>Submitted By: <br />{props.submitted_by}</div>
                            <div className='date'>
                            <Moment format='MMM D, YYYY'>{props.date_submitted}</Moment>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        )
    }


export default JokeCard;