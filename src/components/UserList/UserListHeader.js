import React from 'react'
// import helpers from 'helpers'
import { SharedHeaderStyles } from 'styles/SharedStyles'
import styled from 'styled-components'
// import variables from 'styles/variables'

const StyledUserListHeader = styled(SharedHeaderStyles)``

const UserListHeader = () => {
  return (
    <StyledUserListHeader className='userlist-header'></StyledUserListHeader>
  )
}

export default UserListHeader
