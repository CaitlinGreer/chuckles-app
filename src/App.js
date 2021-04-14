import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Nav from './Nav/Nav' //Navigation Bar

class App extends Component {
  render(){
    return (
      <main className='App'>
        <Nav />
        <header className='header'>
          <h1>Chuckles</h1>
          <h2>Where Dad Jokes Are Our Specialty</h2>
        </header>
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
      </main>
    );
  }
}
export default App;
