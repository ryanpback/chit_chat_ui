import React from 'react'
import MessageDisplay from './MessageDisplay'
import MessageInput from './MessageInput'

const TalkBlock = () => {
  return (
    <div className="Talk-block">
      <div className="talk-block-wrapper container">
        <MessageDisplay />
        <MessageInput />
      </div>
    </div>
  )
}

export default TalkBlock
