import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import JokesContext from './jokesContext'
import config from './config'
import './App.css'

import Nav from './Nav/Nav' //Navigation Bar
import LandingPage from './LandingPage/LandingPage' //home page
import JokesList from './JokesList/JokesList' //list of jokes
import AddJoke from './AddJoke/AddJoke' //add a joke form


class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        jokes: [],
        error: null,
        loading: false,
      }
  }

  componentDidMount() {
    this.fetchAllData()
  }

  fetchAllData = () => {
    Promise.all([
      this.fetchJokes()
    ])
      .then(([jokes]) => {
        this.setState({
          jokes
        })
      })
      .catch(error => {
        this.setState({error})
      })
  }

  fetchJokes = () => {
    return fetch(`${config.API_ENDPOINT}/jokes`)
      .then(res => res.json())
  }

  addJokes = joke => {
    this.setState({
      jokes: [...this.state.jokes, joke]
    })
  }

  renderRoutes(){
    return (
      <div className='App'>
        <Switch>       
          <Route
              exact
              path='/'
              component={LandingPage}
          />
          <Route
              path='/add-joke'
              component={AddJoke}
          />
          <Route
              path='/jokes-list'
              component={JokesList}
          />
        </Switch>
      </div>
    );
  }

  render() {
    const value = {
      jokes: this.state.jokes,
      fetchJokes: this.fetchAllData,
    }
    return (
      <JokesContext.Provider value={value}>
        <div>
          <nav>
            <Nav />
          </nav>
          <main>
            {this.renderRoutes()}
          </main>
        </div>
      </JokesContext.Provider>
    )
  }
}
export default App;
