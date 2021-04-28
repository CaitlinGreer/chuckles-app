import React, { Component } from 'react'
import config from '../config'
import JokesContext from '../jokesContext'
import './AddJoke.css'

class AddJoke extends Component {
    constructor(props){
        super(props)
        this.state = {
            joke: {
                value: ''
            },
            punchline: {
                value: ''
            },
            submitted_by: {
                value: ''
            }
        }
    }

    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }
    
    static contextType = JokesContext

//onChange Functions

    updateJoke(joke){
        this.setState({
            joke: {
                value: joke
            }
        })
    }

    updatePunchline(punchline){
        this.setState({
            punchline: {
                value: punchline
            }
        })
    }

    updateSubmittedBy(submitted_by){
        this.setState({
            submitted_by: {
                value: submitted_by
            }
        })
    }

    handleSubmit = event => {
      event.preventDefault()
      const { joke, punchline, submitted_by } = this.state
      const newJoke = {
        joke: joke.value,
        punchline: punchline.value,
        submitted_by: submitted_by.value
      }
      
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newJoke)
      }
  
      fetch(`${config.API_ENDPOINT}/jokes`, requestOptions)
        .then(res => {
          if (!res.ok) {
            throw new Error('Whoops!  Looks like something went wrong! Try again later.')
          }
          return res.json()
        })
        .then(() => {
            this.props.history.goBack()
            this.context.fetchJokes()
        })
        .catch(error => {
          this.setState({error})
        })
    }

    render() {
        return (
            <div className='form-page-container'>
                <div className='form-heading'>
                    <h2>Share A Chuckle</h2>
                </div>
                <form onSubmit={e => this.handleSubmit(e)} className='form'>
                    <fieldset className='add-joke-fieldset'>
                        <legend className='legend'>Tell Us A Joke</legend>

                        <label htmlFor='joke'>Joke:</label>
                        <input 
                            type='text'
                            id='joke'
                            className='joke'
                            name='joke'
                            placeholder='Why did the chicken cross the road?'
                            onChange={e => this.updateJoke(e.target.value)}
                            required
                        />
                        <br />
                        <label htmlFor='punchline'>Punchline:</label>
                        <input 
                            type='text'
                            id='punchline'
                            className='punchline'
                            name='punchline'
                            placeholder='To get to the other side'
                            onChange={e => this.updatePunchline(e.target.value)}
                            required
                        />
                        <br />
                        <label htmlFor='user-name'>Submitted By:</label>
                        <input 
                            type='text'
                            id='user-name'
                            name='user-name'
                            placeholder='Jerry Seinfeld'
                            onChange={e => this.updateSubmittedBy(e.target.value)}
                        />   
                        <br />
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