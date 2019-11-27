import React from 'react'

class Conversations extends React.Component {
  render() {
    return (
      <div className="Conversations">
        <div className="conversation-header">
          <div className="container">
            <span className="header">Messages</span>

            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </div>
        </div>
        <div className="search-messages">
          <div className="container">
            <div className="input-wrapper">
              <i className="fa fa-search" aria-hidden="true"></i>

              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Conversations
