import React from 'react'
import MessageContent from 'components/MessageContent/MessageContent'
import UserList from 'components/UserList/UserList'
import styled from 'styled-components'

const StyledChitChat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

class App extends React.Component {
  state = {
    activeUser: 0,
    users: [
      {
        userImage:
          'https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg',
        userName: 'Lilly',
        id: 1,
        messages: [
          {
            createdAt: '2019-09-17',
            message: 'Hello there',
            senderId: 1,
            recipientId: 2
          },
          {
            createdAt: '2019-09-17',
            message: "Hey what's up?",
            senderId: 2,
            recipientId: 1
          },
          {
            createdAt: '2019-09-17',
            message: 'How are you doing?',
            senderId: 2,
            recipientId: 1
          },
          {
            createdAt: '2019-09-17',
            message: 'Very well, and yourself?',
            senderId: 1,
            recipientId: 2
          }
        ]
      },
      {
        userImage:
          'https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg',
        userName: 'Ryan',
        id: 2,
        messages: []
      },
      {
        userImage:
          'https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg',
        userName: 'Laura',
        id: 3,
        messages: []
      }
    ]
  }

  setActiveUser = i => {
    this.setState({ activeUser: i })
  }

  render() {
    const conversation = this.state.users[this.state.activeUser].messages

    return (
      <StyledChitChat className='App'>
        <UserList users={this.state.users} setUser={this.setActiveUser} />
        <MessageContent
          conversation={conversation}
          user={this.state.users[this.state.activeUser]}
        />
      </StyledChitChat>
    )
  }
}

export default App
