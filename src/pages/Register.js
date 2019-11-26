import React from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from 'components/Forms/RegistrationForm'

const Registration = () => {
  return (
    <div className="Registration">
      <div className="container">
        <h1 className="app-title">ChitChat</h1>
      </div>

      <div className="register-wrapper">
        <div className="container">
          <RegistrationForm />
          <span className="login-register-link">
            Already have an account? <Link to="/">Log In</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Registration
