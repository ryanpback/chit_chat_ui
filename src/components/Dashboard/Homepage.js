import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import axios from 'axios'

const StyledHomepage = styled.div``

const Homepage = () => {
  return (
    <StyledHomepage>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <h1 style={{ textAlign: 'center' }}>ChitChat</h1>
    </StyledHomepage>
  )
}

export default Homepage
