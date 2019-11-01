import React from 'react'
import styled from 'styled-components'
import helpers from 'helpers'
import variables from 'styles/variables'
import Message from './Message'

const StyledMessageBody = styled.div`
  background-color: ${helpers.hexToRgba(variables.colors.dark, 0.85)};
  height: calc(100% - (65px + 90px));
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

class MessageBody extends React.Component {
  render() {
    const { conversation, user } = this.props

    const messages = conversation.map((message, index) => {
      return (
        <Message
          message={message.message}
          key={index}
          sender={message.senderId === user.id}
        />
      )
    })

    return (
      <StyledMessageBody className='message-body'>{messages}</StyledMessageBody>
    )
  }
}

export default MessageBody
