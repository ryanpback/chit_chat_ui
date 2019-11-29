import React from 'react'
import axios from 'axios'
import Nav from 'components/Nav/Nav'
import Conversations from 'components/Messaging/Conversations'
import NewConversation from 'components/Messaging/NewConversation'
import TalkBlock from 'components/Messaging/TalkBlock'
import Loading from 'components/Shared/Loading'

class Messages extends React.Component {
  state = {
    newConvo: false,
    conversationsLoaded: false,
    loggedInUser: {},
    conversations: []
  }

  startNewConvo = () => {
    this.setState(prevState => ({
      newConvo: !prevState.newConvo
    }))
  }

  componentDidMount() {
    const user = this.props.location.state.user
    this.setState({ user })

    axios
      .get(`/users/${user.id}/conversations`)
      .then(res => {
        // The data loads so quickly that I don't want the spinner to flash on screen for a small request.
        setTimeout(() => {
          this.setState({
            conversationsLoaded: true,
            conversations: res.data.conversations
          })
        }, 2000)
      })
      .catch(err => {
        console.log(err.response)
      })
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

    let messagesPage = <Loading />

    if (this.state.conversationsLoaded) {
      messagesPage = (
        <div className="messaging">
          <Nav />

          <div className="message-center">
            {conversationPanel}
            <TalkBlock />
          </div>
        </div>
      )
    }

    return <div className="Messages">{messagesPage}</div>
  }
}

export default Messages
