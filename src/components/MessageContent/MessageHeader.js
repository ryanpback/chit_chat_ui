import React from 'react'
import variables from 'styles/variables'
import styled from 'styled-components'
import helpers from 'helpers'
import { SharedHeaderStyles } from 'styles/SharedStyles'

const StyledMessageHeader = styled(SharedHeaderStyles)`
  background-color: ${helpers.hexToRgba(variables.colors.dark, 0.9)};
  width: 100%;
`

const MessageHeader = () => {
  return <StyledMessageHeader className='message-header'></StyledMessageHeader>
}

export default MessageHeader
