import React, { Component } from 'react'
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <div>
            <section class='info-section'>
			<div>
				<h3>Welcome to Chuckles! The place to get lost in some bad jokes.</h3>
				<div class='content'>
					<p>Read a joke, share a joke, chuckle and repeat!</p>
					<p>If you're feeling adventurous you may even share a joke or two! Don't worry we keep them anonymous, we won't let
						anyone know you're love for tacky, corny punny nonsense</p>
			    </div>
			</div>
		    </section>

            <section class='random-joke'>
                <div>
                    <h3>Random Joke</h3>
                    <div class='content'>
                        <p>placeholder for random joke</p>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}

export default LandingPage;