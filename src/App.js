import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
// import axios from 'axios'
import HomePage from 'components/Dashboard/Homepage'
import Register from 'components/Dashboard/Register'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={HomePage} />
        <Route path='/register' component={Register} />
        {/* <Route path='/messages' component={Messages} /> */}
      </div>
    </Router>
  )
}

export default App
