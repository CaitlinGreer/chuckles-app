import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import JokesList from './JokesList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <JokesList />
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})