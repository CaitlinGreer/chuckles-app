import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import RandomJoke from '../RandomJoke/RandomJoke'


class LandingPage extends Component {
    render() {
        return (
            <div className='home-page-container'>
            <Header />
            
                <div className='landing-page-container' id='landing-page-container'>
                    <div className='welcome-info'>
                        <h3>A Little About Chuckles!</h3>
                        <p>Did you know laughter and smiling are scientifically proven to improve your health and mental state?  That means laughter really is the best medicine!  I know...it's crazy right? 
                           <br /> <br />
                           Every day we're surrounded by humans who take life too seriously.  Chuckles is here to do the exact opposite!
                        </p>
                        <p>
                           Chuckles is here to turn a bad day into a good day and a good day into a great day.  So turn that frown upside down and lets get to chuckling!
                        </p>
                    </div> 
                    <div className='share-a-joke'>
                        <p>If you're feeling adventurous you may even share a joke or two right <Link to={'/add-joke'}>here</Link>! Don't worry we keep them anonymous, we won't let
                           anyone know how much you love tacky, corny punny nonsense
                        </p>
                    </div>
                        

                      

                    <hr />

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