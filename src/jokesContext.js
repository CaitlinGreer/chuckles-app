import React from 'react'

const JokesContext = React.createContext({
    jokes: [],
    addJoke: () => {}
})

export default JokesContext