import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class RegistrationForm extends React.Component {
  state = {
    newUser: {
      name: '',
      userName: '',
      email: '',
      emailConfirm: '',
      password: ''
    }
  }

  inputOnChange = e => {
    const input = e.target.id
    const value = e.target.value

    this.setState(prevState => {
      return {
        newUser: {
          ...prevState.newUser,
          [input]: value
        }
      }
    })
  }

  registerUser = e => {
    e.preventDefault()

    axios.post('http://localhost:3001/users', this.state.newUser)
  }

  render() {
    return (
      <div className="Registration-form-wrapper">
        <form
          className="registration-form"
          autoComplete="off"
          onSubmit={e => this.registerUser(e)}
        >
          <div className="input-wrapper">
            <span className="form-label">Name</span>

            <input
              id="name"
              type="text"
              onChange={e => this.inputOnChange(e)}
            />
          </div>

          <div className="input-separator"></div>

          <div className="input-wrapper">
            <span className="form-label">Username</span>
            <input
              id="userName"
              type="text"
              onChange={e => this.inputOnChange(e)}
            />
          </div>

          <div className="input-separator"></div>

          <div className="input-wrapper">
            <span className="form-label">Email</span>

            <input
              id="email"
              type="text"
              onChange={e => this.inputOnChange(e)}
            />
          </div>

          <div className="input-separator"></div>

          <div className="input-wrapper">
            <span className="form-label">Confirm Email</span>

            <input
              id="emailConfirm"
              type="text"
              onChange={e => this.inputOnChange(e)}
            />
          </div>

          <div className="input-separator"></div>

          <div className="input-wrapper">
            <span className="form-label">Password</span>

            <input
              id="password"
              type="password"
              onChange={e => this.inputOnChange(e)}
            />
          </div>

          <button type="submit" className="btn registration-submit">
            Register
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(RegistrationForm)
