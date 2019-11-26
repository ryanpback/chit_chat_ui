import React from 'react'
import Nav from 'components/Nav/Nav'
import Conversations from 'components/Messaging/Conversations'
import TalkBlock from 'components/Messaging/TalkBlock'

const Messages = () => {
  return (
    <div className="Messages">
      <Nav />

      <div className="message-center">
        <Conversations />
        <TalkBlock />
      </div>
    </div>
  )
}

export default Messages
