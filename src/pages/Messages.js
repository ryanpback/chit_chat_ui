import React from 'react'
import Nav from 'components/Nav/Nav'
import Conversations from 'components/Messaging/Conversations'
import Conversation from 'components/Messaging/Conversation'

const Messages = () => {
  return (
    <div className="Messages">
      <Nav />

      <div className="message-center">
        <Conversations />
        <Conversation />
      </div>
    </div>
  )
}

export default Messages
