import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from 'components/Dashboard/Homepage'
import Register from 'components/Dashboard/Register'
import Messages from 'components/Messaging/MessageHub'

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
