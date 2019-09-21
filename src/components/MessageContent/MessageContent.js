import React from 'react'
import MessageHeader from './MessageHeader'
import MessageBody from './MessageBody'
import MessageInput from './MessageInput'
import styled from 'styled-components'

const StyledMessageContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const MessageContent = ({ conversation, user }) => {
  return (
    <StyledMessageContent className='message-content'>
      <MessageHeader />
      <MessageBody conversation={conversation} user={user} />
      <MessageInput />
    </StyledMessageContent>
  )
}

export default MessageContent
