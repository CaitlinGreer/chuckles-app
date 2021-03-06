import React from 'react'
import Moment from 'react-moment'

import './JokeCard.css'

function JokeCard(props){
        return (
            <div>
                <div className='card-container'>
                    <div className='joke-card'>
                        <div className='front'>{props.joke}</div>
                        <div className='back'>
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