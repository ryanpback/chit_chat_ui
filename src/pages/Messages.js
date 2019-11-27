import React from 'react'
import Nav from 'components/Nav/Nav'
import Conversations from 'components/Messaging/Conversations'
import NewConversation from 'components/Messaging/NewConversation'
import TalkBlock from 'components/Messaging/TalkBlock'

class Messages extends React.Component {
  state = {
    newConvo: false
  }

  startNewConvo = () => {
    this.setState(state => ({
      newConvo: !state.newConvo
    }))
  }

  render() {
    let conversationPanel = (
      <Conversations newConvHandler={this.startNewConvo} />
    )

    if (this.state.newConvo) {
      conversationPanel = (
        <NewConversation newConvHandler={this.startNewConvo} />
      )
    }

    return (
      <div className="Messages">
        <Nav />

        <div className="message-center">
          {conversationPanel}
          <TalkBlock />
        </div>
      </div>
    )
  }
}

export default Messages
