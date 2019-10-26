import React from 'react'
import axios from 'axios'

class Login extends React.Component {
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

    axios.post('http://localhost:3001/login', loginData)
  }

  render() {
    return (
      <div className='login-inputs'>
        <div className='container'>
          <form action='' onSubmit={e => this.login(e)}>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                className='form-control'
                type='text'
                onChange={e => this.inputOnChange(e)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                className='form-control'
                type='text'
                onChange={e => this.inputOnChange(e)}
              />
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
