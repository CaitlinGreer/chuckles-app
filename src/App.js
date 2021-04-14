import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import Nav from './Nav/Nav' //Navigation Bar
import LandingPage from './LandingPage/LandingPage' //home page
import JokesList from './JokesList/JokesList' //list of jokes
import AddJoke from './AddJoke/AddJoke' //add a joke form


class App extends Component {
  render(){
    return (
      <div className='App'>
        <Nav />
               
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
        
        
        
      </div>
    );
  }
}
export default App;
