import React from 'react'
import styled from 'styled-components'
import helpers from 'helpers'
import variables from 'styles/variables'

const StyledUser = styled.div`
  padding: 25px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: #fff;
  font-weight: bold;
  border-bottom: 1px solid ${helpers.hexToRgba(variables.colors.primary, 0.2)};

  img.user-image {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    border-radius: 100%;
  }
`

const User = ({ user, index, setUserHandler }) => {
  return (
    <StyledUser className='user' onClick={() => setUserHandler(index)}>
      <img className='user-image' src={user.userImage} alt='' />

      <div className='user-info'>
        <span className='user-name'>{user.userName}</span>
      </div>
    </StyledUser>
  )
}

export default User
