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
                        <p>Did you know laughter and smiling are scientifically proven to improve your health and mental state?  
                           Yes, you read that right!  That means laughter really is the best medicine!  I know...it's crazy right? 
                           <br /> <br />
                           Do you ever find yourself feeling like you're drowning in a sea of humans who take life way too seriously?  
                           Chuckles is here to save you from the days full of serious!  So kick back, relax and have a laugh.
                           Let us tell you some jokes, or feel free to get wacky and add to the silliness.
                        </p>
                        <p>
                           A simple joke can be all it takes to turn a bad day into a good day and a good day into a great day.  
                           Let's turn that frown upside down and get to chuckling!
                        </p>
                    </div> 
                    <div className='share-a-joke'>
                        <h3>Tell A Joke</h3>
                        <p>If you're feeling a little wacky you may even share a joke or two right <Link to={'/add-joke'}>here</Link>! 
                            Feel free to let us know your name to take pride in your love for all things punny.  
                            Or if you want to keep it on the DL (as the kids say), make up a hilarious user name to go with your joke
                            and we'll keep your love for bad jokes a secret.
                        </p>
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