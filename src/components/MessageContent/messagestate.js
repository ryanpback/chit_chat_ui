// import MessageContent from 'components/MessageContent/MessageContent'
// import UserList from 'components/UserList/UserList'

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

// componentDidMount() {
//   axios
//     .get('http://localhost:3001/users')
//     .then(res => {
//       console.log(res)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

setActiveUser = i => {
  this.setState({ activeUser: i })
}

const conversation = this.state.users[this.state.activeUser].messages
{
  /* <UserList users={this.state.users} setUser={this.setActiveUser} />
        <MessageContent
          conversation={conversation}
          user={this.state.users[this.state.activeUser]}
        /> */
}

const StyledChitChat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
