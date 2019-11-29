import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  inputOnChange = e => {
    const input = e.target.id
    const value = e.target.value

    this.setState({ [input]: value })
  }

  login = e => {
    e.preventDefault()

    const loginData = {
      email: this.state.email,
      password: this.state.password
    }

    axios
      .post('/login', loginData)
      .then(res => {
        this.props.history.push('/messages', { user: res.data.user })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="Login-form-wrapper">
        <form
          className="registration-form"
          autoComplete="off"
          onSubmit={e => this.login(e)}
        >
          <div className="input-wrapper">
            <i className="fa fa-envelope-o form-label" aria-hidden="true"></i>

            <input
              id="email"
              type="text"
              onChange={e => this.inputOnChange(e)}
            />
          </div>

          <div className="input-separator"></div>

          <div className="input-wrapper">
            <i className="fa fa-lock form-label" aria-hidden="true"></i>

            <input
              id="password"
              type="password"
              onChange={e => this.inputOnChange(e)}
            />
          </div>

          <button type="submit" className="btn login-submit">
            Log In
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)
