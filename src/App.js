import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from 'pages/Homepage'
import Register from 'pages/Register'
import Messages from 'pages/Messages'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/messages" component={Messages} />
      </div>
    </Router>
  )
}

export default App
