import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from 'components/Forms/LoginForm'

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="container">
        <h1 className="app-title">ChitChat</h1>
      </div>

      <div className="login-wrapper">
        <div className="container">
          <LoginForm />
          <span className="login-register-link">
            Don't have an account? <Link to="/register">Create One</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Homepage
