import React from 'react'
import axios from 'axios'

class Register extends React.Component {
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
      <div className='register-inputs'>
        <div className='container'>
          <form action='' onSubmit={e => this.registerUser(e)}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                className='form-control'
                type='text'
                onChange={e => this.inputOnChange(e)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='userName'>Username</label>
              <input
                id='userName'
                className='form-control'
                type='text'
                onChange={e => this.inputOnChange(e)}
              />
            </div>

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
              <label htmlFor='emailConfirm'>Confirm Email</label>
              <input
                id='emailConfirm'
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
                type='password'
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

export default Register
