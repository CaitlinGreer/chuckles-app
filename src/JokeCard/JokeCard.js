import React from 'react'

import './JokeCard.css'

function JokeCard(props){
    console.log(props)
        return (
            <div>
                <div className='user-joke'>
                    <p className='joke'>{props.joke}</p>
                    <p className='punchline'>{props.punchline}</p>
                    <p className='user-name'>Submitted By: {props.submitted_by}</p>
                </div>
            </div>
            
        )
    }


export default JokeCard;