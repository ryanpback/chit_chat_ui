import React from 'react'

const NewConversation = props => {
  return (
    <div className="NewConversation conversation-panel">
      <div className="conversation-panel-header">
        <div className="container">
          <span className="header">New Conversation</span>

          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={props.newConvHandler}
          ></i>
        </div>
      </div>

      <div className="panel-search">
        <div className="container">
          <div className="input-wrapper">
            <i className="fa fa-search" aria-hidden="true"></i>

            <input type="text" placeholder="Find a friend" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewConversation
