import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'

import Nav from './Nav/Nav' //Navigation Bar
import Footer from './Footer/Footer' //Footer
import LandingPage from './LandingPage/LandingPage' //home page
import JokesList from './JokesList/JokesList' //list of jokes
import AddJoke from './AddJoke/AddJoke' //add a joke form


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
        <Footer />
      </main>
    );
  }
}
export default App;
