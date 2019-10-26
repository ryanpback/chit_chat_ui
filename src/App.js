import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
// import axios from 'axios'
import HomePage from 'components/Dashboard/Homepage'
import Register from 'components/Dashboard/Register'
import Login from 'components/Dashboard/Login'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={HomePage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        {/* <Route path='/messages' component={Messages} /> */}
      </div>
    </Router>
  )
}

export default App
