import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import RandomJoke from '../RandomJoke/RandomJoke'

class LandingPage extends Component {
    render() {
        return (
            <div>
            <Header />
                <div className='landing-page-container'>
                    <div className='welcome-content'>
                        <h3>Welcome to Chuckles! <br /> The place to get lost in some bad jokes.</h3>
                            <p>Read a joke, share a joke, chuckle and repeat!</p>
                    </div>
                    <div className='welcome-info'>
                        <p>Did you know laughter and smiling are scientifically proven to improve your health and mental state?  I know...it's crazy right? 
                           With a world as crazy as it is, why not create something that brings a little joy into people's lives!
                           Chuckles is here to turn a bad day into a good day and a good day into a great day.  So turn that frown upside down and lets get to chuckling!
                        </p>
                        
                        <p>If you're feeling adventurous you may even share a joke or two right <Link to={'/add-joke'}>here</Link>! Don't worry we keep them anonymous, we won't let
                           anyone know how much you love tacky, corny punny nonsense
                        </p>

                        <p></p>
                    </div>        
                        
    
                    <div className='random-joke-main-container'>
                        <h3>Joke of The Day</h3>
                            <div>
                                <RandomJoke />
                            </div>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default LandingPage;