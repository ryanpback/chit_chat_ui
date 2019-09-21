import React from 'react'
import UserListHeader from './UserListHeader'
import User from './User'
import styled from 'styled-components'
import variables from 'styles/variables'
import helpers from 'helpers'

const StyledUserList = styled.div`
  height: 100%;
  width: 30%;
  min-width: 150px;
  max-width: 275px;
  background-color: ${helpers.hexToRgba(variables.colors.darkBackground, 0.7)};
`

const UserList = ({ users, setUser }) => {
  return (
    <StyledUserList className='user-list'>
      <UserListHeader />

      {users.map((user, index) => {
        return (
          <User
            user={user}
            index={index}
            key={user.userName + index}
            setUserHandler={setUser}
          />
        )
      })}
    </StyledUserList>
  )
}

export default UserList
