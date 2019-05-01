import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom'
import Game from './Game'

function App() {
  return(
    <div>
      <Switch>
        <Route path='/' component={Game} />
      </Switch>
    </div>
  )
}

export default App
