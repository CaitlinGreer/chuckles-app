import React, { Component } from 'react'

class AddJoke extends Component {
    render() {
        return (
            <div>
                <form>
                    <fieldset className='add-joke-fieldset'>
                        <legend>Tell Us A Joke</legend>

                        <label htmlFor='joke'>Joke:</label>
                        <input 
                            type='text'
                            id='joke'
                            name='joke'
                            placeholder='Why did the chicken cross the road?'
                            required
                        />

                        <label htmlFor='punchline'>Punchline:</label>
                        <input 
                            type='text'
                            id='punchline'
                            name='punchline'
                            placeholder='To get to the other side'
                            required
                        />

                        <label htmlFor='user-name'>Submitted By:</label>
                        <input 
                            type='text'
                            id='punchline'
                            name='punchline'
                            placeholder='Jerry Seinfeld'
                        />   
                       
                        <button 
                            type='submit'
                            className='submit-btn'>
                                Make Us Laugh
                        </button>

                       
                    </fieldset>
                </form>    
            </div>
        )
    }
}

export default AddJoke;