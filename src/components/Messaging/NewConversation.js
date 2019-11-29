import React from 'react'
import axios from 'axios'
import PanelHeader from 'components/Shared/PanelHeader'
import UserSelect from './UserSelect'
import Recipients from './Recipients'

class NewConversation extends React.Component {
  state = {
    users: [],
    recipients: [],
    searchString: '',
    searching: false,
    noUsersMessage: ''
  }

  searchUsers = e => {
    this.setState({ searchString: e.target.value }, () => {
      const searchString = this.state.searchString

      if (searchString.length === 0) {
        this.setState({
          users: [],
          searching: false,
          noUsersMessage: ''
        })
        return
      }

      if (searchString.length > 0) {
        this.setState({ searching: true })
      }

      if (searchString.length < 3) {
        return
      }

      axios
        .get(`/users/${searchString}/typeahead`)
        .then(res => {
          this.setState({ users: res.data.users, noUsersMessage: '' })
        })
        .catch(err => {
          const errorMessage = err.response.data.error

          this.setState({ users: [], noUsersMessage: errorMessage })
        })
    })
  }

  addRecipient = user => {
    this.setState(prevState => ({
      recipients: [...prevState.recipients, user],
      users: [],
      searchString: '',
      searching: false,
      noUsersMessage: ''
    }))
  }

  removeRecipient = user => {
    this.setState(prevState => ({
      recipients: prevState.recipients.filter(u => u.id !== user.id)
    }))
  }

  render() {
    let recipients = ''
    let noResults = ''

    if (this.state.recipients.length > 0) {
      recipients = (
        <Recipients
          recipients={this.state.recipients}
          removeRecipientHandler={this.removeRecipient}
        />
      )
    }

    if (
      this.state.users.length < 1 &&
      this.state.searching &&
      this.state.noUsersMessage !== ''
    ) {
      noResults = (
        <div className="no-results-wrapper container">
          {this.state.searching && this.state.users.length < 1 ? (
            <span className="no-results">{this.state.noUsersMessage}</span>
          ) : (
            ''
          )}
        </div>
      )
    }
    return (
      <div className="NewConversation panel">
        <PanelHeader
          headerText="New Conversation"
          placeholderText="Find a friend"
          convHandler={this.props.newConvHandler}
          searchString={this.state.searchString}
          searchHandler={this.searchUsers}
          faClass="times"
        />

        <div className="search-results">
          {noResults}
          <div className="user-list">
            {this.state.users.map(u => (
              <UserSelect
                key={u.email}
                user={u}
                addRecipientHandler={this.addRecipient}
              />
            ))}
          </div>
        </div>

        {recipients}
      </div>
    )
  }
}

export default NewConversation
